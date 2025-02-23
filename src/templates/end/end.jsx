import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { GiCube } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { Link } from "react-router-dom"

function End() {
    return (
        <footer className="max-w-[1200px] text-center font-gummy dark:bg-teal-900 dark:text-green-100 md:w-full lg:text-left">
            <div className="flex items-center justify-center border-b-2 border-neutral-200 p-4 border-neutral-500 md:justify-between lg:justify-between">
                <div className="text-lg hidden md:block lg:block">
                    <span>Conecte-se conosco nas redes sociais:</span>
                </div>
                <div className="flex justify-center">
                    <a className="group mr-6 text-green-100 rounded-full border border-green-100 p-2 cursor-pointer hover:text-gray-500 hover:border-gray-500 transtion duration-300" aria-label="Facebook">
                        <FaFacebookF className="w-5 h-5"/>
                    </a>
                    <a className="group mr-6 text-green-100 rounded-full border border-green-100 p-2 cursor-pointer hover:text-gray-500 hover:border-gray-500 transtion duration-300" aria-label="Instagram">
                        <FaInstagram className="w-5 h-5"/>
                    </a>
                </div>
            </div>

            <div className="w-full py-4 flex flex-col gap-6 text-center md:w-full md:flex-row">
                <div className="flex flex-col justify-between md:flex-row md:gap-6 md:w-full lg:px-10 lg:justify-between lg:flex-row">
                    <div className="flex flex-col w-full justify-start py-4 text-left md:w-1/2 lg:text-left lg:w-1/2 ">
                        <h6
                            className="mb-4 flex items-center gap-2 justify-center font-normal text-2xl md:justify-start">
                            <GiCube className="w-7 h-7"/>
                            Tech Agro
                        </h6>
                        <p className="font-light text-sm hidden md:text-lg md:block lg:text-lg lg:block">
                            Tech Agro
                            Soluções inteligentes para o agronegócio. Laudos técnicos e contratos com a garantia de bancos confiáveis.
                            © 2025 Tech Agro - Todos os direitos reservados.
                        </p>
                    </div>
                    <div className="flex flex-col items-center py-4 md:w-1/3 lg:items-center lg:w-1/2">
                        <h6 className="mb-2 font-medium text-xl uppercase">Menu</h6>
                        <p className="mb-1 text-lg"><Link to="/" className="text-neutral-600 dark:text-green-100 hover:text-gray-500 transtion duration-300">Home</Link>
                        </p>
                        <p className="mb-1 text-lg"><Link to="/sobre" className="text-neutral-600 font-normal dark:text-green-100 hover:text-gray-500 transtion duration-200">Sobre</Link>
                        </p>
                        <p className="mb-1 text-lg"><Link to="/laudo" className="text-neutral-600 font-normal dark:text-green-100 hover:text-gray-500 transtion duration-200">Laudo</Link>
                        </p>
                        <p className="mb-1 text-lg"><Link to="/projeto" className="text-neutral-600 font-normal dark:text-green-100 hover:text-gray-500 transtion duration-200">Projeto</Link>
                        </p>
                        <p className="mb-1 text-lg"><Link to="/contato" className="text-neutral-600 font-normal dark:text-green-100 hover:text-gray-500 transtion duration-200">Contato</Link>
                        </p>
                    </div>
                    <div className="flex flex-col items-center w-full py-4 md:w-1/3 md:items-start lg:items-start lg:w-1/4">
                        <h6 className="mb-4 text-lg uppercase">Contact</h6>
                        <p className="flex items-center gap-4 mb-2 md:text-lg text-lg">
                            <FaHome className="w-6 h-6"/>
                            Giruá - RS
                        </p>
                        <p className="flex items-center gap-4 mb-2 md:text-lg text-lg">
                            <FaEnvelope className="w-5 h-5"/>
                            techagro@gmail.com
                        </p>
                        <p className="flex items-center gap-4 mb-2 md:text-lg text-lg">
                            <FaPhone className="w-5 h-5"/>
                            55 99915 4228
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-full bg-teal-900 p-6 text-center bg-green-500">
                <span className="text-green-100 font-normal">© 2025 Copyright: Desenvolvido por </span>
                <a
                    className="font-normal hover:text-gray-500"
                    href="https://new-portifolio-eta-two.vercel.app/?fbclid=PAZXh0bgNhZW0CMTEAAaaQz-P1TamFKoLnb1kuPvdcSZpqRYMuTyAlHjNpkcb0k_74DPcyai81gRQ_aem_PDrYv_UPeR1PsoRWcQi6NQ"
                >Dev Diego</a>
            </div>
        </footer>
    );
}

export default End;