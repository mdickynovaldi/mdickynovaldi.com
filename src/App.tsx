import { Hammer } from "lucide-react";
import { HardHat } from "lucide-react";
import { BackgroundBeamsWithCollision } from "./components/ui/background-beams-with-collision";

function App() {
  return (
    <main>
      <BackgroundBeamsWithCollision>
        <div className="text-center space-y-6 p-8 dark:text-white">
          <div className="flex justify-center space-x-4">
            <Hammer className="w-12 h-12 text-yellow-500" />
            <HardHat className="w-12 h-12 text-yellow-500" />
          </div>
          <h1 className="text-4xl font-bold dark:text-white">
            Under Construction
          </h1>
          <p className="text-xl dark:text-white">
            We're working hard to bring you something amazing. Please check back
            soon!
          </p>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-yellow-500 h-2.5 rounded-full w-1/2"></div>
          </div>
          <p className="text-sm dark:text-white">Expected completion: Soon™</p>
        </div>
      </BackgroundBeamsWithCollision>
    </main>
  );
}

export default App;
