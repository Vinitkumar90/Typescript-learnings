//loose form of class

interface User {
  readonly dbId: number,
  email: string,
  userId: number,
  googleId?: string,
  //startTrail: () => string
  startTrail(): string,
  getCoupon(couponname: string, value:number):number
}

//reopening of the interface or merging
interface User {
    githubToken: string
}

interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

const vinit: Admin = { dbId: 22, email: "v@v.com", userId: 2211,
    role:"admin",
    githubToken:"github",
    startTrail: () => {
        return "Trial started"
    },
    getCoupon: (name:"vinit10", off:10) => {
        return 10
    }
 };
vinit.email = "v@vk.com"
// vinit.dbId = 33  swiggly
