import React from 'react'
import './App.css';
import {anticipate, motion} from 'motion/react';

const App = () => {
  return (
    <div className="bg-black w-[100vw] h-[100vh]">
      {/* <motion.div 
      className="w-[200px] h-[200px] bg-[red] border-3 border-white"
      initial={{
        x:0,
        y:0
      }}
      animate={{
        // x:1000,
        x:[0, 400, 400, 0, 0],
        y:[0, 0, 400, 400, 0],
        // rotate:360
        rotate:[0,360,0,-360,0]
      }}
      transition={{
        duration:3,
        delay:1,
        // repeat:Infinity,
        // ease:'anticipate'
      }}
      ></motion.div> */}


      {/* <motion.div
      className="w-[200px] h-[200px] bg-[#00b3ff] border-3 border-white rounded-[50%]"
      whileHover={{
        backgroundColor:'yellow'
      }}
      animate={{
        //  x:1100,
        //  scale:0.5
      }}
      whileTap={{
        scale:0.7
      }}
      ></motion.div>
      <motion.div 
      drag
      whileDrag={{
        scale:0.8
      }}

      dragConstraints={{
        left:0,
        right:1000,
        top:0,
        bottom:2000
      }}
      dragDirectionLock="true"

      className="bg-amber-300 w-[200px] h-[200px]">

      </motion.div> */}


      <h2 className="text-white text-align-center text-5xl">Hello</h2>
      <p className="text-white ttext-[18px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut deleniti exercitationem ex quas itaque ducimus debitis at nemo mollitia accusantium. Labore tempore eveniet corrupti vero. Omnis officiis quis eligendi, sint distinctio neque nostrum officia iure iste. Voluptate ullam ad praesentium, laborum tempore atque molestiae voluptas qui delectus dicta. Eaque asperiores modi necessitatibus mollitia perspiciatis quia harum enim, amet beatae, commodi qui quaerat laboriosam porro dignissimos tenetur alias doloribus obcaecati numquam sit velit id iusto nisi repellendus aliquid? Tempora temporibus, voluptatibus eos quisquam quod amet ipsam ipsum, exercitationem vel beatae repudiandae soluta id placeat dolore, itaque omnis dolores labore! Similique, tempora. <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quae obcaecati enim voluptatem autem. Tempore, eaque ipsam voluptatum quod impedit nesciunt culpa vero nihil quisquam molestiae, mollitia iusto assumenda fugit natus nulla nostrum unde laudantium? Dolorum quidem sequi similique fuga, minus veritatis error nemo temporibus explicabo enim voluptates, inventore facilis numquam, corrupti minima facere omnis exercitationem doloremque nam fugit harum? Porro similique aspernatur laudantium. Numquam nobis officiis consequuntur assumenda nihil quia, velit dolor non odit ipsa quos error quaerat. Tenetur quaerat ipsum deleniti temporibus eos enim vel est totam rem culpa suscipit voluptatibus laborum numquam, illum ad. Minus quos alias quo tenetur porro officiis harum quas incidunt obcaecati soluta impedit aspernatur modi quaerat saepe, sit nisi voluptas sequi hic magnam eos unde iure perspiciatis? Maxime fuga earum ducimus quibusdam, facere obcaecati commodi eligendi tempora non, velit laboriosam officia adipisci cum veritatis expedita sit tempore illo accusamus. Eius saepe quo atque beatae hic eaque reprehenderit, fugit dicta voluptatem officiis perferendis libero molestiae eveniet similique autem reiciendis ipsum rem laborum cum quod quos enim, a corrupti placeat. Quibusdam delectus dicta id quas nihil consectetur odio fugiat cupiditate dignissimos, praesentium autem esse saepe vel at fugit assumenda velit alias magni tenetur quia qui.<br/> lorem 200
      <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptates porro natus beatae magni vel amet vitae, distinctio velit exercitationem obcaecati sit harum optio molestias provident impedit, nihil id inventore. Eaque quos pariatur excepturi modi delectus nostrum, qui esse harum nobis eveniet non rem facere doloribus fugiat dolorem. Ipsum enim tenetur ratione corporis vero quas, rerum, quis porro veritatis molestiae eius fugiat suscipit modi asperiores odit placeat alias atque! Enim quod beatae eligendi tenetur vero magni esse iure amet recusandae voluptas similique numquam temporibus deserunt vel, eum eveniet facilis vitae ipsam dignissimos ea. Exercitationem doloremque enim nisi quae tempora vero dolore quaerat impedit vitae repellendus veritatis blanditiis accusamus, voluptas id ex ad non obcaecati temporibus perferendis eligendi, harum necessitatibus! Alias, cupiditate? Fugiat vitae ab asperiores consectetur, expedita ipsam maxime nobis! Officia aliquam non ratione pariatur quasi ut quidem inventore! Quod quisquam odit quia natus incidunt iusto dolorem nam porro doloremque fuga aut libero ipsum quos enim earum in exercitationem quasi ratione fugit commodi deserunt quo dolorum, qui deleniti! Rerum modi omnis nihil iusto id impedit vitae fuga adipisci aperiam minima placeat nobis laudantium commodi sint consectetur voluptatem odio ea totam, magni amet non. Nam dicta praesentium, blanditiis est non optio. <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur non, reprehenderit necessitatibus itaque dolorem deleniti inventore eum, repudiandae, explicabo molestias tenetur? Adipisci exercitationem distinctio commodi, eius optio, a, quos nihil quod aliquam temporibus omnis beatae! Alias vero amet, voluptates aspernatur quod atque assumenda ipsum, sed quia minima sint optio unde hic fugiat similique illo itaque et nesciunt iusto, odio nisi nam ullam eligendi. Assumenda modi aut, nobis libero, porro debitis, ea tenetur suscipit quo obcaecati reprehenderit laudantium voluptatem beatae vitae. Quis porro voluptate possimus saepe in asperiores, quasi necessitatibus? Ipsa eligendi possimus amet quo mollitia velit qui reiciendis distinctio perspiciatis consequatur ducimus quam odit facilis labore repudiandae tempore magnam laboriosam, maxime dolore. Qui sapiente debitis nam quidem harum quam exercitationem ducimus. Molestiae repudiandae sapiente voluptatibus facilis praesentium. A, reiciendis. Libero culpa dolor a! Magni quo amet alias deleniti, corrupti cum eligendi velit repellat quisquam consequatur cupiditate rem numquam hic pariatur debitis unde illum, expedita impedit reiciendis? Debitis ratione quis, dicta perferendis commodi, dolores quia voluptatem voluptas saepe vero quo, repellendus quaerat ipsa nulla provident hic illo recusandae veniam? Laborum architecto esse praesentium magnam totam itaque sint aliquid veniam odio molestias voluptates deserunt natus eius, porro maiores ex perferendis perspiciatis repellat beatae? Inventore recusandae molestias, eligendi illo, incidunt qui sunt libero, voluptate exercitationem quaerat magni atque blanditiis perspiciatis ullam delectus itaque velit. Voluptatibus fugiat fugit non ducimus quos ea iusto, a ex odit harum vel? Ab excepturi cupiditate doloremque veritatis facilis sit est eligendi quia nulla vitae quae numquam, id tenetur error porro quas obcaecati. Corporis est repellat exercitationem tempora corrupti hic ipsum neque molestias velit tempore dolores, laboriosam ut porro? Odio corporis obcaecati placeat omnis, culpa, odit provident corrupti est qui necessitatibus sapiente! Facilis laborum est et vero culpa, animi, mollitia ratione eius corrupti officia quod aut provident neque debitis consequuntur perspiciatis vitae necessitatibus at maxime doloremque perferendis? Quaerat explicabo minus, culpa suscipit similique, rem, assumenda excepturi quas possimus ipsum voluptate ex harum architecto. Magni, adipisci dolorem. Accusamus, distinctio dolorem magnam laborum non molestias magni quos ducimus! Voluptatem cumque hic magni quam, doloremque perspiciatis labore eveniet sunt pariatur et unde inventore sapiente dolorum amet temporibus corrupti laboriosam qui a, fugit quasi illum? Dolorum obcaecati quasi sed porro exercitationem aliquam hic eum praesentium numquam blanditiis! Eveniet sequi asperiores corrupti magnam tenetur natus hic blanditiis nisi. Sunt nam sint distinctio quo dolor ut unde eaque dicta laudantium error. Iure similique pariatur, magni amet consectetur eius accusamus eum nostrum eos aspernatur earum, obcaecati quas error quidem vitae nesciunt eveniet at! Alias provident nam distinctio ut ex accusamus, autem voluptate a tempora, cumque iste sint? Maiores magni neque exercitationem cupiditate ea sunt rerum, nemo, dolor dolore provident molestiae illo, natus aut nesciunt. Molestias excepturi nobis quam cum perspiciatis. Adipisci illo dolorem culpa ratione provident alias natus officia recusandae quos accusamus molestias delectus voluptates iste, blanditiis veniam quia rerum consequatur eius modi enim id earum sapiente! Numquam amet quia non nisi voluptate molestiae quis qui, explicabo dicta incidunt error aspernatur alias odit consequatur iure nihil?</p>
    </div>

  )
}

export default App