import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black py-10 min-h-[30vh] flex items-center justify-center px-6 pl-12">
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <div className="font-bold text-white mb-3">Support</div>
          <div className="text-gray-400 space-y-2 cursor-pointer">
            <div>Help Center</div>
            <div>Safety Information</div>
            <div>Cancellation Options</div>
          </div>
        </div>
        <div>
          <div className="font-bold text-white mb-3">Company</div>
          <div className="text-gray-400 space-y-2 cursor-pointer">
            <div>About Us</div>
            <div>Privacy Policy</div>
            <div>Community Blog</div>
          </div>
        </div>
        <div>
          <div className="font-bold text-white mb-3">Contact</div>
          <div className="text-gray-400 space-y-2 cursor-pointer">
            <div>FAQ</div>
            <div>Partnerships</div>
            <div>Get in Touch</div>
          </div>
        </div>
        <div>
          <div className="font-bold text-white mb-3">Social</div>
          <div className="flex flex-wrap gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Image src="/images/travelfacebook.png" alt="Facebook" width={20} height={30} />
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
              <Image src="/images/traveltiktok.png" alt="TikTok" width={20} height={30} />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <Image src="/images/traveltwitter.png" alt="Twitter" width={20} height={30} />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <Image src="/images/travelyoutube.png" alt="YouTube" width={20} height={30} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}