import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-muted dark:bg-gray-900">
      <div className="container mx-auto px-2 py-8 sm:py-12 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent dark:from-primary dark:to-secondary">
              Saimon Shop
            </h3>
            <p className="text-muted-foreground text-xs sm:text-sm dark:text-gray-400">
              Saimon Shop is a leading e-commerce marketplace in South Asia,
              owned by the Saimon Global Group,
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary dark:text-gray-400 dark:hover:text-primary"
              >
                <FacebookIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary dark:text-gray-400 dark:hover:text-primary"
              >
                <TwitterIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary dark:text-gray-400 dark:hover:text-primary"
              >
                <InstagramIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary dark:text-gray-400 dark:hover:text-primary"
              >
                <LinkedinIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary dark:text-gray-400 dark:hover:text-primary"
              >
                <GithubIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 dark:text-gray-200">
              Company
            </h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <Link
                  href="/#about"
                  className="text-muted-foreground hover:text-primary text-xs sm:text-sm dark:text-gray-400 dark:hover:text-primary"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-muted-foreground hover:text-primary text-xs sm:text-sm dark:text-gray-400 dark:hover:text-primary"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/#products"
                  className="text-muted-foreground hover:text-primary text-xs sm:text-sm dark:text-gray-400 dark:hover:text-primary"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/#blog"
                  className="text-muted-foreground hover:text-primary text-xs sm:text-sm dark:text-gray-400 dark:hover:text-primary"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-muted-foreground hover:text-primary text-xs sm:text-sm dark:text-gray-400 dark:hover:text-primary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 dark:text-gray-200">
              Legal
            </h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary text-xs sm:text-sm dark:text-gray-400 dark:hover:text-primary"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary text-xs sm:text-sm dark:text-gray-400 dark:hover:text-primary"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary text-xs sm:text-sm dark:text-gray-400 dark:hover:text-primary"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary text-xs sm:text-sm dark:text-gray-400 dark:hover:text-primary"
                >
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 dark:text-gray-200">
              Contact
            </h3>
            <address className="not-italic text-muted-foreground text-xs sm:text-sm dark:text-gray-400">
              <p className="text-muted-foreground">
                Khilkhet Dhaka
                <br />
                Bangladesh
              </p>
              <p className="mt-2">Email: info@saimonshop.com</p>
              <p>Phone: +880172259 7565</p>
            </address>
          </div>
        </div>

        <div className="border-t border-border mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center dark:border-gray-800">
          <p className="text-[10px] sm:text-sm text-muted-foreground dark:text-gray-500">
            &copy; {new Date().getFullYear()} Saimon shop. All rights reserved.
          </p>
          <div className="mt-3 sm:mt-4 md:mt-0">
            <ul className="flex space-x-4 sm:space-x-6 text-[10px] sm:text-sm">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary dark:text-gray-500 dark:hover:text-primary"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary dark:text-gray-500 dark:hover:text-primary"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary dark:text-gray-500 dark:hover:text-primary"
                >
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
