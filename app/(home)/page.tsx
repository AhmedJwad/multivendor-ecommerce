import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";



export default function Home() {
 
 return(
  <div className="p-4">
  <div className="flex flex-col gap-y-4">
    <div>
      <Button variant="elevated">
        i am a button 
      </Button>
      </div>
      <div>
      <Input placeholder="insert your name"/>
      </div>
      <div>
      <Progress value={50}/>
      </div>
      <div>
      <Textarea placeholder={"i am text arear"}/>
      </div>
      <div>
      <Checkbox />
      </div>
      
     
   
  </div>
  </div>
 );
}
