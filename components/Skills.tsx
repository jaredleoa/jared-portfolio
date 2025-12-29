export default function Skills() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-100">
          Skills
        </h2>
        <p className="mt-2 max-w-2xl text-neutral-300">
          Tools and concepts used across the projects on this site.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Group title="Languages" items={["Python", "Dart", "Java", "C", "SQL"]} />
          <Group
            title="Backend"
            items={["FastAPI", "REST", "Validation", "Testing", "CI"]}
          />
          <Group
            title="Cloud / Infra"
            items={["AWS (Lambda, DynamoDB, S3)", "Terraform", "Docker", "Linux"]}
          />
          <Group
            title="Data / UI"
            items={["Data Visualisation", "Dashboards", "Flutter", "State Management"]}
          />
        </div>
      </div>
    </section>
  );
}

function Group(props: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-4">
      <div className="text-xs uppercase tracking-wide text-neutral-500">
        {props.title}
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {props.items.map((it) => (
          <span
            key={it}
            className="rounded-full border border-neutral-800 bg-neutral-950/40 px-2.5 py-1 text-xs text-neutral-200"
          >
            {it}
          </span>
        ))}
      </div>
    </div>
  );
}
