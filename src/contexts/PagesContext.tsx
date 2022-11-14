import { createContext , ReactNode, useState, useEffect, ReactComponentElement, JSXElementConstructor, useContext} from "react";


type Pages = 'Dashboard' | 'Send'

type GoToPageType = <T>(name:Pages, props:T)=>void

export interface PageContextDataProps {
	goToPage: GoToPageType;
	currentPage: string;
	currentPageProps: any;
}

interface PagesContextProviderProps {
	children: ReactNode;
}

export const PagesContext = createContext({} as PageContextDataProps);


export function PagesContextProvider({ children } : PagesContextProviderProps) {

	const [currentPage, setcurrentPage] = useState<string>('')
	const [currentPageProps, setCurrentPageProps] = useState<any>()

	const goToPage : GoToPageType = (name, props)=>{
		setcurrentPage(name)
		setCurrentPageProps(props)
	}


  return (
    <PagesContext.Provider value={{
		goToPage,
		currentPage,
		currentPageProps
    }}>
		{children}
    </PagesContext.Provider>
  )
}

interface ScreenProps {
	name: Pages;
	component: () => JSX.Element
  }
  
interface PagesProviderProps {
	children: ReactComponentElement<JSXElementConstructor<any>, ScreenProps>[];
	className: string;
}
  
export function Screen({name, component} : ScreenProps){
	return(<>{name}{component}</>)
}

export function PagesContainer({children, className} : PagesProviderProps) {

	const {currentPage, currentPageProps, goToPage} = useContext(PagesContext)
	const [pageComponent, setPageComponent] = useState<JSX.Element>()

	useEffect(()=>{
		goToPage(children[0].props.name, {})
		// eslint-disable-next-line
	}, [])
	
	useEffect(()=>{
		children.forEach(({props})=>{
			if(props.name === currentPage){
				setPageComponent(<props.component {...currentPageProps}/>)
			}
		})
	// eslint-disable-next-line
	}, [currentPage, currentPageProps])

	return (
		<div className={className}>
			{pageComponent}
		</div>
	)
}

export function usePages() : PageContextDataProps{
	const context = useContext(PagesContext);
	return context;
  }