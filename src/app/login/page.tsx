import FormLogin from "./components/FormLogin";
import "./style.css";

export default function Page() {
    return (
        <main id="main" className="w-full h-screen flex flex-col justify-center items-center p-14">
            <FormLogin></FormLogin>
        </main>
    );
}