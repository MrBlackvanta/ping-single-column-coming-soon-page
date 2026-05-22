import { FacebookIcon, InstagramIcon, TwitterIcon } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="mx-auto mt-30 flex w-full max-w-160 flex-col items-center gap-6 px-7 pb-6 text-center md:mt-18 md:px-0">
      <ul className="flex gap-4">
        <li>
          <a
            href="https://www.facebook.com/"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FacebookIcon />
          </a>
        </li>
        <li>
          <a
            href="https://www.twitter.com/"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <TwitterIcon />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </a>
        </li>
      </ul>
      <div className="text-gray space-y-1.5 text-xs">
        <p>&copy; Copyright Ping. All rights reserved.</p>
        <p>
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            href="https://www.linkedin.com/in/abdelrhman-vanta/"
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Abdelrhman Abdelaal
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
