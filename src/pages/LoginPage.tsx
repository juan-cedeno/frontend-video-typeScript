import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";
import "../css/user.css";
import { notificationMessage } from "../herlpers/notificationMessage";
import UserService from "../services/user";

interface IUser {
  email: string;
  password: string;
}

export const LoginPage = () => {
  const { t } = useTranslation();
  const { setUserLocalStarage } = useContext(StoreContext);

  const [valueLogin, setValueLogin] = useState<IUser>({
    email: "test@test.com",
    password: "123456",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const { email, password } = valueLogin;
  const history = useHistory();

  const handlenChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueLogin({
      ...valueLogin,
      [e.target.name]: e.target.value,
    });
  };

  const handlenSubmitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const user = await UserService.loginUser(email, password);
    setLoading(false);

    setValueLogin({
      email: "",
      password: "",
    });

    if (user?.message) {
      return notificationMessage("Error", user.message, "danger");
    }
    if (user) {
      setUserLocalStarage(user);
      history.go(0);
    }
    setLoading(false);
  };

  return (
    <>
      <div className="cont-user">
        <div className="background">
          <a
            href="https://github.com/juan-cedeno"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/juan-cede%C3%B1o-660a47196/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>

          <a href="mailto:juancc0315@gmail.com">
            <i className="far fa-envelope"></i>
          </a>
        </div>

        <form onSubmit={handlenSubmitLogin}>
          <label>{t("email")}</label>
          <input
            type="email"
            name="email"
            placeholder={t("email")}
            autoComplete="off"
            autoFocus
            value={email}
            onChange={handlenChangeLogin}
          />

          <label>{t("password")}</label>
          <input
            type="password"
            name="password"
            placeholder={t("password")}
            autoComplete="off"
            value={password}
            onChange={handlenChangeLogin}
          />

          <button
            className={`${loading && "disable"}`}
            disabled={loading}
            type="submit"
          >
            {t("login")}
          </button>
        </form>
      </div>
    </>
  );
};
