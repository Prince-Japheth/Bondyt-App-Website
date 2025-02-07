"use client";

import { motion } from 'framer-motion';
import { fadeInUp } from "@/lib/animations";
import Image from 'next/image';

export function DownloadButtons() {
    return (
        <motion.div variants={fadeInUp} className="mt-16 flex justify-center space-x-4">
            <button className="flex items-center rounded-full bg-[#212121] px-7 py-3 text-white transition-all hover:border-2 hover:border-[#F878FF]">
                <Image
                    src="https://cdn-icons-png.flaticon.com/128/16509/16509899.png"
                    alt="App Store"
                    width={24}
                    height={24}
                    className="h-7 w-7 filter invert mr-2"
                />
                Appstore
            </button>
            <button className="flex items-center rounded-full bg-[#212121] px-7 py-3 text-white transition-all hover:border-2 hover:border-[#F878FF]">
                <Image
                    src="https://cdn-icons-png.flaticon.com/128/3128/3128279.png"
                    alt="Google Play"
                    width={24}
                    height={24}
                    className="mr-2"
                />
                Google
            </button>
        </motion.div>
    );
}

export function HeroDownloadButtons() {
    return (
        <motion.div variants={fadeInUp} className="mb-16 flex justify-center gap-4">
            <button className="flex items-center gap-2 rounded-full bg-[#111827] px-6 py-2 text-white transition border-4 border-transparent hover:border-[#F878FF]">
                <Image
                    src="https://cdn-icons-png.flaticon.com/128/16509/16509899.png"
                    alt="App Store"
                    width={24}
                    height={24}
                    className="h-5 w-5 filter invert"
                />
                <span>Appstore</span>
            </button>
            <button className="flex items-center gap-2 rounded-full bg-[#111827] px-6 py-2 text-white transition border-4 border-transparent hover:border-[#F878FF]">
                <Image
                    src="https://cdn-icons-png.flaticon.com/128/3128/3128279.png"
                    alt="Google Play"
                    width={24}
                    height={24}
                    className="h-5 w-5"
                />
                <span>Google</span>
            </button>
        </motion.div>
    );
}