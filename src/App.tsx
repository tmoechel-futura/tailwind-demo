import Button from "./components/Button";
import IconButton from "./components/IconButton";

export default function App() {
  return (
    <main className="grid grid-cols-10 gap-2 m-4">
      <div className="flex flex-col gap-2">
        <IconButton buttonType={"primary"} rounded buttonIcon="save">Download</IconButton>
        <Button buttonType={"primary"} outline>Pri Outline</Button>
        <Button buttonType={"primary"}>Primary Basic</Button>
      </div>
      <div className="flex flex-col gap-2">
        <Button buttonType={"secondary"} rounded >Sec. Rounded</Button>
        <Button buttonType={"secondary"} outline>Sec. Outline</Button>
        <Button buttonType={"secondary"}>Sec. Basic</Button>
      </div>
      <div className="flex flex-col gap-2">
        <Button buttonType={"success"} rounded>Success</Button>
        <Button buttonType={"success"} outline>Succ Outline</Button>
        <Button buttonType={"success"}>Success Basic</Button>
      </div>
      <div className="flex flex-col gap-2">
        <Button buttonType={"warning"} rounded>Warning</Button>
        <Button buttonType={"warning"} outline>Warn Outline</Button>
        <Button buttonType={"warning"}>Warning Basic</Button>
      </div>
      <div className="flex flex-col gap-2">
        <Button buttonType={"danger"} rounded>Error</Button>
        <Button buttonType={"danger"} outline>Error Outline</Button>
        <Button buttonType={"danger"}>Error Basic</Button>
      </div>
    </main>
  )
}
