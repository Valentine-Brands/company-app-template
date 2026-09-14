const startingPoints = [
  {
    number: "01",
    title: "A clear purpose",
    description:
      "Choose one task your team repeats. Decide what would make it easier.",
  },
  {
    number: "02",
    title: "The people using it",
    description:
      "Describe who needs the tool and what they should be able to do.",
  },
  {
    number: "03",
    title: "A first working version",
    description:
      "Build one complete workflow, try it together, and improve from there.",
  },
];

export function Welcome() {
  return (
    <>
      <section
        aria-labelledby="welcome-heading"
        className="grid gap-12 py-16 md:grid-cols-[1.25fr_1fr] md:items-center md:gap-16 md:py-24"
      >
        <div>
          <p className="mb-6 text-xs font-semibold tracking-[0.18em] text-accent uppercase">
            A starting point for your team
          </p>
          <h1
            id="welcome-heading"
            className="max-w-xl text-5xl leading-[1.08] font-semibold tracking-tight sm:text-6xl"
          >
            Your next idea starts here.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
            Turn a daily task into a tool that gives your team more time for the
            work that matters.
          </p>
          <a href="#getting-started" className="button-primary mt-8">
            Plan your app <span aria-hidden="true">↗</span>
          </a>
        </div>
        <aside
          aria-label="Example starting brief"
          className="relative rounded-3xl border border-line bg-leaf p-6 sm:p-9"
        >
          <p className="text-xs font-semibold tracking-widest text-muted uppercase">
            Your first brief
          </p>
          <div className="mt-6 rounded-2xl border border-line bg-surface p-6 shadow-sm">
            <div
              className="mb-5 h-1 w-9 rounded-full bg-accent"
              aria-hidden="true"
            />
            <p className="text-xl leading-snug font-medium">
              “Create an app that helps our team track requests.”
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Add who will use it, the steps they take, and what a successful
              result looks like.
            </p>
          </div>
          <p className="mt-5 text-sm text-muted">
            Start with a need. Build from there.
          </p>
        </aside>
      </section>
      <section
        id="getting-started"
        aria-labelledby="getting-started-heading"
        className="scroll-mt-8 border-t border-line pt-10 pb-16"
      >
        <div className="mb-8 flex flex-wrap items-baseline justify-between gap-3">
          <h2
            id="getting-started-heading"
            className="text-2xl font-semibold tracking-tight"
          >
            Start with one useful workflow
          </h2>
          <span className="text-sm text-muted">
            Small enough to try. Useful enough to keep.
          </span>
        </div>
        <ol className="grid gap-4 md:grid-cols-3">
          {startingPoints.map(({ number, title, description }) => (
            <li
              key={number}
              className="rounded-2xl border border-line bg-surface p-6"
            >
              <span
                className="text-xs font-semibold tracking-widest text-accent"
                aria-hidden="true"
              >
                {number}
              </span>
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {description}
              </p>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
