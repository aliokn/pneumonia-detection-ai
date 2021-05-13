import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import tfk from './img/tfk.jpeg';
import pno from './img/Pnomani.png';
import './css/How.css';
import blur from './img/docblur.png';
import numpy from './img/numpy.png';
class How extends Component{



render(){

return(

<div className="How"><h1>Aslında çok basit!</h1>
<div><img src={tfk} className="howimg"/></div>
<p className="howp">Yapay zeka veri setindeki özellikleri derin öğrenme algoritmasıyla üstünden geçerek bir sonraki çıktıda tahmin yapar.Bu projemizde de biz Sequantial bir model oluşturduk.</p>
<p className="howp">Optimizer olarak Adam optimizerını seçtik.Sınıflandırma metodu olarak ise Sparse Categorical Crossentropy yöntemini kullandık.</p>
<div><img src={pno} className="howimg1"/> <img src={numpy} className="howimg1"/> </div>
<p className="howp">Temelde 3 sınıfımız mevcut bunlar Normal,Bakteriyal ve Viral zekamız eğitim aşamasında bu vakaların bulunduğu 5856 resmin üzerinden geçerek hangi resmin hangi sınıfa ait olduğunu tespit etmeye çalıştı.
Bu tespit Python'ın Numpy kütüphanesini kullandık.Bu kütüphane X ray görüntülerinin Matris haritalarını çıkarıp aralarındaki benzerlik oranlarını test etti.
Bunların sonucunda karşımıza 3 sonuç çıkıyor ve bu sonuçların zekaya verilen resme olan oranını yapay zeka bize döndürüyor.</p>

</div>



)

}




}
export default How;