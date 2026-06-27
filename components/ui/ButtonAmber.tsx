import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonAmberProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  type?: 'button' | 'submit';
  className?: string;
  disabled?: boolean;
}

export default function ButtonAmber({
  href,
  onClick,
  children,
  type = 'button',
  className = '',
  disabled = false,
}: ButtonAmberProps) {
  if (href) {
    return (
      <Link href={href} className={`btn-amber ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn-amber ${className}`}
    >
      {children}
    </button>
  );
}
