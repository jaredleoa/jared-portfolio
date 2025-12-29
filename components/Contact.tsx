export default function Contact() {
  return (
    <section id="contact" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-100">
          Contact
        </h2>
        <p className="mt-2 max-w-2xl text-neutral-300">
          Links for projects, CV, and contact.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <LinkCard
            label="Email"
            value="jaredleo@icloud.com"
            href="mailto:jaredleo@icloud.com"
          />
          <LinkCard
            label="GitHub"
            value="github.com/jaredleoa"
            href="https://github.com/jaredleoa"
          />
          <LinkCard
            label="LinkedIn"
            value="linkedin.com/in/jaredleonard"
            href="https://www.linkedin.com/in/jaredleonard/"
          />
        </div>
      </div>
    </section>
  );
}

function LinkCard(props: { label: string; value: string; href: string }) {
  return (
    <a
      href={props.href}
      target={props.href.startsWith("http") ? "_blank" : undefined}
      rel={props.href.startsWith("http") ? "noreferrer" : undefined}
      className="group rounded-2xl border border-neutral-800 bg-neutral-900/40 p-4 transition hover:-translate-y-0.5 hover:border-emerald-400/40"
    >
      <div className="text-xs uppercase tracking-wide text-neutral-500">
        {props.label}
      </div>
      <div className="mt-2 text-sm text-neutral-200 transition group-hover:text-emerald-200">
        {props.value} <span className="text-neutral-500">↗</span>
      </div>
    </a>
  );
}
