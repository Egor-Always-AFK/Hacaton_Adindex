export default function Registration() {
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
                <div className="card flex-shrink-0 shadow-2xl bg-base-200">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Регистрация</h1>
                        <div style={{ display: "flex", gap: "10px" }}>
                            <div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Почта</span>
                                    </label>
                                    <input type="email" placeholder="email@example.com" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Пароль</span>
                                    </label>
                                    <input type="password" placeholder="******" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Повторите пароль</span>
                                    </label>
                                    <input type="password" placeholder="******" className="input input-bordered" />
                                </div>
                            </div>
                            <div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Имя</span>
                                    </label>
                                    <input type="text" placeholder="Иван" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Фамилия</span>
                                    </label>
                                    <input type="text" placeholder="Иванов" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Отчество</span>
                                    </label>
                                    <input type="text" placeholder="Иванович" className="input input-bordered" />
                                </div>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary" onClick={login}>Зарегистрироваться</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}