export default function Movie({ data }) {
  return (
    <div>
      {/*<img src="http://xn----7sbbina5amcvokdhi4p.xn--p1ai/images/posters/500-725/07871915a8107172b3b5dc15a6574ad3.jpg" />*/}
      <img
        src={`http://xn----7sbbina5amcvokdhi4p.xn--p1ai/images/posters/500-725/${data.image}.jpg`}
      />
    </div>
  );
}
