import './Hello.css';
const Hello = ({children}) => {
    return (
        <>
            <h1>Hello World 
                {children}
            </h1>
        </>
    );
}
export default Hello;