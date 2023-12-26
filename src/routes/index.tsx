import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>Daniel Alvarado Desarrollo Web</Title>
      <h1>Daniel Alvarado Desarrollo Web!</h1>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://www.linkedin.com/in/daniel-alvarado-5a14a449/" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}
