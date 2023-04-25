import { Content } from "./content-interface";

let contentListArr:Content[] = [];

const generateContent = (id:number,contentArr:(string)[])=>{
    return {
      id,
      title:contentArr[0],
      description:contentArr[1],
      creator:contentArr[2]
    }
}
export const contentList = {
    generateContent: ():Content[]=>{
        contentListArr.push({
            ...generateContent(
              1,['Rocket','Aminated movie','James']
            ),
            ...{imgURL:'../assets/ang.png'},
            ...{type:'Movie'},
            ...{tags:['Animated','Most Popular','Creative']}
        });
        contentListArr.push({
            ...generateContent(
              2,['GOT',`Famous TV show`,'David']
            ),
            ...{tags :['famous']},
            ...{type:'Sitcom'},
            ...{imgURL:'../assets/ang.png'}
        });
        contentListArr.push({
            ...generateContent(
              3,['Money Heist','Heist','Netflix']
            ),
            ...{tags :['famous','Action']},
            ...{type:'Web-Series'},
            ...{imgURL:'../assets/ang.png'}
        });
          contentListArr.push({
            ...generateContent(
              4,['Golmaal','Comedy-drama film','Rohit Shetty']
            ),
            ...{type:'Movie'},
            ...{imgURL:'../assets/ang.png'},
            ...{tags:['Bollywood','Comedy']}
          });
      return contentListArr;
    },
    contentListArr
}