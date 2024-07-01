import Image from "next/image";
import Link from "next/link";
// config
import config from "@/config/general";

const Header = () => {

  // const event = ({ action, category, label, value }: any) => {
  //   (window as any).gtag('event', action, {
  //     event_category: category,
  //     event_label: label,
  //     value: value,
  //   });
  // };

  return (
    <header className="flex-col sm:flex-row flex justify-between items-start">
      <Image src={"/slate.svg"} width={150} height={60} alt={config.title} />
      <nav>
        <ul className="flex sm:mt-0 mt-4 items-center lg:gap-7 gap-3 font-medium text-base sm:text-lg">
          <li className="text-black">
            <Link href={config.socials.twitter} passHref legacyBehavior>
              <a
                className="px-5 py-2 rounded"
                target="_blank"
                rel="noopener noreferrer"
                // onClick={() => {
                //   event({
                //     action: 'twitter_social_interaction',
                //     category: 'social_interaction',
                //     label: 'clicked Twitter link',
                //     value: 'social',
                //   });
                // }}
              >
                Twitter
              </a>
            </Link>
          </li>
          <li className="bg-activeButton text-white rounded py-2">
            <Link href="mailto:slateappo7@gmail.com" passHref legacyBehavior>
              <a
                className="px-5 py-2 rounded"
                target="_blank"
                rel="noopener noreferrer"
                // onClick={() => {
                //   event({
                //     action: 'email_social_interaction',
                //     category: 'social_interaction',
                //     label: 'clicked contact us email',
                //     value: 'social',
                //   });
                // }}
              >
                Contact Us
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
