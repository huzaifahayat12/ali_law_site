import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HOME_COPY, HOME_GALLERY } from "@/lib/constants";

export function HomeGallery() {
  return (
    <section className="bg-surface py-16 md:py-20">
      <div className="container-site">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">
            {HOME_COPY.galleryH2}
          </h2>
          <p className="mt-3 text-muted">{HOME_COPY.galleryBody}</p>
        </div>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {HOME_GALLERY.map((photo) => (
            <li key={photo.src} className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </li>
          ))}
        </ul>

        <Link
          href="/events-updates"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-hover"
        >
          Events & updates
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
