import { Show, createSignal } from "solid-js"

export default function Login() {
    const [email, setEmail] = createSignal("")
    const [password, setPassword] = createSignal("")
    const [status, setStatus] = createSignal("")

    const login = () => {
        console.log("Login")
    }

    return (
        <div className="hero min-h-100% bg-base-100">
            <div className="hero-content flex-row lg:flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Траектория</h1>
                    <p className="py-6">
                        Масштабный проект «Траектория» от AdIndex создан для студентов, джуниоров и тех, кто 
                        стремится достичь успеха в индустрии маркетинга и коммуникаций. Конференция «Траектория.
                    </p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Почта</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered"/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Пароль</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Забыли пароль?</a>
                            </label>
                        </div>
                        <Show when={status() === "error"}>
                            <p className="bg-error">Неверный пароль</p>
                        </Show>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary" onClick={login}>Войти</button>
                        </div>
                        <div>
                            <a href="/registration" className="label-text-alt link link-hover">Регистрация</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}