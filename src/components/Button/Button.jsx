import { Link } from "react-router-dom";

function Button({
  variant,
  buttonIcon,
  onClick,
  disabled,
  href,
  customStyles,
  children,
}) {
  const Icon = buttonIcon;
  const iconStyles = buttonIcon ? "inline-flex items-center gap-x-1.5" : "";
  const colors = {
    primary:
      "bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500",
    secondary:
      "bg-white text-gray-900 hover:bg-gray-50 dark:bg-white/10 dark:text-white dark:hover:bg-white/20",
    soft: "bg-indigo-50 text-indigo-600 hover:bg-indigo-100 dark:bg-indigo-100 dark:hover:bg-indigo-50",
    ghost: "text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-100",
  };

  return href ? (
    <Link
      className={`${colors[variant]} rounded-md flex flex-col items-center justify-center px-3 py-2 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${customStyles}`}
      to={href}
    >
      {children}
    </Link>
  ) : (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`${iconStyles} ${colors[variant]} rounded-md px-3 py-2 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${customStyles}`}
    >
      {buttonIcon && <Icon className="-ml-0.5 h-5 w-5" aria-hidden="true" />}
      {children}
    </button>
  );
}

export default Button;