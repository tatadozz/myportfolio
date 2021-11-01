import Image from 'next/image'

function Footer() {
    return (
        <footer style={{backgroundColor: "#fedd00"}}>
            <nav className="flex justify-center items-center py-4">
                <ul className="flex">
                    <li className="mr-2">
                        <a href="https://github.com/tatadozz">
                            <Image
                                src="/assets/logo/github.svg"
                                alt="My GitHub"
                                width={32}
                                height={32}
                            />
                        </a>
                    </li>
                    <li className="ml-2">
                        <a href="https://www.linkedin.com/in/cl%C3%A9ment-lefief-653900182/">
                            <Image
                                src="/assets/logo/linkedin.svg"
                                alt="My GitHub"
                                width={32}
                                height={32}
                            />
                        </a>
                    </li>
                </ul>
            </nav>
            <p className="text-center py-2">Copyright ©2021</p>
        </footer>
    )
}

export default Footer
