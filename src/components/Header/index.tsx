import { FiPlusSquare } from "react-icons/fi";

import { Container } from "./styles";
const Logo = require("../../assets/logo.svg") as string;

interface HeaderProps {
  openModal: () => void;
}

export function Header(props: HeaderProps) {
  return (
    <Container>
      <header>
        <img src={Logo} alt="GoRestaurant" />
        <nav>
          <div>
            <button type="button" onClick={props.openModal}>
              <div className="text">Novo Prato</div>
              <div className="icon">
                <FiPlusSquare size={24} />
              </div>
            </button>
          </div>
        </nav>
      </header>
    </Container>
  );
}
