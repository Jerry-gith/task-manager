import { IButton } from "@/types";
import Link from "next/link";


const Button = ({name, type, styles, href}: IButton) => {
  return (
    <Link
    href={href}
    type={type}
    className={styles}
  >
    {name}
  </Link>
  )
}

export default Button