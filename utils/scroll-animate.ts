export async function animateOnScroll(
  selector: string,
  animation: object,
  options: object = {},
  stagger = 0,
) {
  if (typeof window === "undefined") return;
  const Velocity = (await import("velocity-animate")).default;
  const elements = document.querySelectorAll(selector);
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            Velocity(entry.target, animation, options);
          }, i * stagger);
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 },
  );
  elements.forEach((el) => observer.observe(el));
}
