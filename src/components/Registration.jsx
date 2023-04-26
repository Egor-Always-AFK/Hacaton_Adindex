export default function Registration() {
    return (
        <div className="hero min-h-100% bg-base-100">
            <div className="hero-content flex-row lg:flex-col">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Регистрация</h1>
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
                            <input type="password" placeholder="password" className="input input-bordered"/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Повторите пароль</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered"/>
                        </div>
                        <div className="divider"></div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary" onClick={login}>Зарегистрироваться</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}