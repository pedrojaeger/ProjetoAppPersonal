import Footer from "./shared/footer";


export default function MainContainer({ children }) {
    return (
        <>

            <div>{children}</div>
            <Footer />
        </>


    )
}