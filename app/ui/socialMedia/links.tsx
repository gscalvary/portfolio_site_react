import Image from "next/image";
import me from '@/app/data/me.json';

export default function SocialMedia() {

    const icons = me.icons;

    return (
        <div className="container mx-auto">
            <div className="mb-3">Connect with me</div>
            <div className="container flex justify-start">
                {icons?.map((icon) => (
                    <a key={ icon.id } href={ icon.link } target="_blank">
                        <Image
                            className="icon"
                            src={ icon.image }
                            alt={ icon.imageDesc }
                            height={ icon.height }
                            width={ icon.width }
                        />
                    </a>
                ))}
            </div>
            <div className="font-thin mt-10 text-sm">Copyright © 2024 Christopher Oliver | All rights reserved</div>
        </div>
    );
}