import './App.css';
import  'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <>
    <div className="container">
        <div className="header text-center py-4">
          <h1>About us </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque odio unde voluptates! </p>
         </div>
    </div>
    <div className="container ">
      <div className="row">
        <div className="col-lg-12 text-center col-xl-6">
          <h1 className='py-3'>About us Sport store</h1>
        <p className='p-5 '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam totam eos eligendi eaque, beatae quos debitis soluta unde ratione molestiae molestias fuga, ex voluptatum accusamus doloremque odit dolorum obcaecati vitae.
          Iusto nobis totam suscipit hic dicta deserunt. Distinctio aut enim natus nisi magni, dolorum est nostrum excepturi minus quis, dolore culpa doloremque ut vero laboriosam minima id totam illum consectetur.
        </p></div>
        <div className="col-md-12 col-xl-6 " > 
        <img className='img-fluid rounded ' src="https://www.datacube.ae/static/about-us-ca5d21dd1cef3f0315b902b086eabf9f.jpg" alt="" /></div>
      </div>
      <div className="row mt-5">
         <div className="slider-image col-md-12 col-lg-12 col-xl-6  order-1 d-flex  ">
          <img className='img-fluid container ' src="https://t4.ftcdn.net/jpg/02/61/52/95/360_F_261529596_YZWJaMnYFSCM0FSCrxs71o6RrZ9MpP4D.jpg" alt="" />
         </div>
         <div className="py-5 text-center col-xl-6 order-xl-2  ">
              <h1>Our Mission</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam repellendus sed, saepe tenetur recusandae deserunt quisquam veritatis quas natus, veniam distinctio, qui optio obcaecati! Magnam dolorum consequuntur sequi maxime facilis.
              Aperiam saepe unde veritatis magni, labore fuga placeat laudantium? Quis est non quia officia dicta sequi ducimus. Dignissimos eum, ut commodi nesciunt ratione vel totam? Nihil, alias. Deserunt, facilis animi.</p>
         </div>
      </div>
    </div>
    </>
   
  );
}

export default App;
