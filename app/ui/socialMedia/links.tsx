import Image from "next/image";
import me from '@/app/data/me.json'

export default function SocialMedia() {

    const icons = me.icons;

    return (
        <div>
            {icons?.map((icon) => (
                <a key={ icon.id } href={ icon.link } target="_blank">
                    <Image
                        src={ icon.image }
                        alt={ icon.imageDesc }
                        height={ icon.height }
                        width={ icon.width }
                    />
                </a>
            ))}
        </div>
    );
}