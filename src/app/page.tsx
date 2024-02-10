import Appbar from "./components/Appbar";
import Fab from "./components/Fab";
import ListTile from "./components/ListTile";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <Appbar></Appbar>
      <section className="p-6 w-full gap-4 flex flex-col justify-between">
        <ListTile></ListTile>
        <ListTile></ListTile>
        <ListTile></ListTile>
        <ListTile></ListTile>
        <ListTile></ListTile>
      </section>
      <Fab></Fab>
    </main>
  );
}
