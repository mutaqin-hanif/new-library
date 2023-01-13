export default function ({ active }) {
  return active ? (
    <svg
      width="26"
      height="20"
      viewBox="0 0 26 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.5 3.75C0.5 1.67893 2.17893 0 4.25 0H12.912C14.1659 0 15.3367 0.626629 16.0322 1.66987L18.2979 5.06837C18.5297 5.41612 18.92 5.625 19.338 5.625H21.75C23.8211 5.625 25.5 7.30393 25.5 9.375V16.25C25.5 18.3211 23.8211 20 21.75 20H4.25C2.17893 20 0.5 18.3211 0.5 16.25V3.75Z"
        fill="#FECE30"
      />
    </svg>
  ) : (
    <svg
      width="25"
      height="21"
      viewBox="0 0 25 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.75 2.56055C3.05964 2.56055 2.5 3.12019 2.5 3.81055V16.3105C2.5 17.0009 3.05964 17.5605 3.75 17.5605H21.25C21.9404 17.5605 22.5 17.0009 22.5 16.3105V9.43555C22.5 8.74519 21.9404 8.18555 21.25 8.18555H18.838C17.5841 8.18555 16.4133 7.55892 15.7178 6.51567L13.4521 3.11717C13.2203 2.76942 12.83 2.56055 12.412 2.56055H3.75ZM0 3.81055C0 1.73948 1.67893 0.0605469 3.75 0.0605469H12.412C13.6659 0.0605469 14.8367 0.687176 15.5322 1.73042L17.7979 5.12892C18.0297 5.47667 18.42 5.68555 18.838 5.68555H21.25C23.3211 5.68555 25 7.36448 25 9.43555V16.3105C25 18.3816 23.3211 20.0605 21.25 20.0605H3.75C1.67893 20.0605 0 18.3816 0 16.3105V3.81055Z"
        fill="#C7A2DC"
      />
    </svg>
  );
}
