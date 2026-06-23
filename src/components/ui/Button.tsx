import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline";

type SharedButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

type ButtonAsLinkProps = SharedButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonAsButtonProps = SharedButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonProps = ButtonAsLinkProps | ButtonAsButtonProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary: "border-ppm-navy bg-ppm-navy text-white hover:bg-ppm-blue",
  secondary: "border-white bg-white text-ppm-navy hover:bg-ppm-light",
  outline:
    "border-ppm-grey bg-transparent text-ppm-navy hover:border-ppm-navy hover:bg-ppm-navy hover:text-white",
};

export function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center rounded-md border px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] transition-colors duration-200",
    "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ppm-blue",
    variantClasses[variant],
    className,
  );

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props;

    return (
      <Link className={classes} href={href} {...linkProps}>
        {children}
      </Link>
    );
  }

  const { type = "button", ...buttonProps } = props as ButtonAsButtonProps;

  return (
    <button className={classes} type={type} {...buttonProps}>
      {children}
    </button>
  );
}
