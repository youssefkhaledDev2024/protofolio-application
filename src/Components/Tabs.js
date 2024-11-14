import React, { useState } from 'react';
import "../Tabs.css";

const Tabs = () => {
  const [currentTab, setCurrentTab] = useState(-1);

  const data = [
    { id: "1", name: "هيئه التسليح ق.م", info: "الأفرع التابعة له", bransh: "مركز الأمداد الألي" },
    { id: "2", name: "هيئه الأمداد و التموين", info: "الأفرع التابعة له", bransh: "مركز الأمداد الألي" },
    { 
      id: "3", 
      name: "قيادة القوات الجويه", 
      info: "الأفرع التابعة له", 
      bransh: "فرع الوقود البحري  \n شعبه معدات الطيران", 
      units:"- المستودع الرئيسي لمعدات الطيران \n - الورش الرئيسيه لمعدات الطيران الميكانيكه و الكهربائية \n - المستودع الرئيسي للمعدات الالكترونيه \n الورش الرئيسيه لمعدات الطيران الإلكترونيه \n شعبه معدات الطيران " 
    },
    { 
        id: "4", 
        name: "قيادة قوات الدفاع الجوي ", 
        info: "الأفرع التابعة له", 
        bransh: "- الفرع الفني للدفاع الجوي شعبه أذ د/جو \n - فرع امداد سعبه اشاره د/جو \n - فرع امداد شعبه مركبات د / جو \n - الفرقه الخامسه د/جو (مكتب كبير المهندسين أ.ذ) \n - فرع مراقبه العهده", 
        units:"- الورشه الرئيسيه رقم 60 د/جو    \n - مستودع الاشاره الفرعي رقم (4)د/جو  \n - الورشه المتوسطه للمركبات رقم 9 د/جو    \n -الورشه الفرعيه للاشاره رقم 4 د/جو     \n   - الورشه المتوسطه لمعدات رادار و صواريخ د/جو رقم 206 \n - المستودع الفرعي رقم 1 أ.ذ فر5 د/جو تعبوي" 
      },   
      { 
        id: "5", 
        name: "قيادة القوات البحريه  ", 
        info: "الأفرع التابعة له", 
        bransh: "- فرع امداد شعبه المساحه البحريه\n -     شعبه الصواريخ و المدفعيه\n -شعبه الصواريخ و المدفعيه فرع الأسلحه  \n -شعبه الصوارخ و المدفعيه فرع الذخيره \n -  شعبه الصوارخ و المدفيه فرع إداره النيران \n -شعبه الصوارخ و المدفيه فرع الامداد \n -شعبه الصوارخ و المدفيه فرع الصواريخ  \n - شعبه الحرب الالكترونيه و الانذار فرع الإصلاح  \n - شعبه الحرب الالكترونيه و الانذار  فرع الامداد  \n - شعبه الاشاره و المراقبه البحريه فرع الامداد   \n -    شعبه صيانه و اصلاح السفن فرع الامداد \n -    شعبه الصيانه و اصلاح الطوربيد و الالغام فرع الامداد  \n -    شعبه الاشاره و المراقبه البحريه فرع الامداد  \n -    فرع المركبات البحري  \n -فرع المهمات البحري \n - قياده وحدات الانقاذ \n -       فرع الحرب الكيميائيه - القوات البحريه (مكتب الامداد) \n فرع امداد الغطس و الانقاذ و السفن المساعده " , 
        units:"-المستودع الرئيسي لمعدات المساحيه و الملاحيه\n -  المستودع الرئيسي لمعادات الغطس و الانقاذ  \n - المستودع الرئيسي للمعدات الفنيه    \n -     المستودع الرئيسي لاجهزه الانذار و الحرب الالكترونيه     \n    -مستودع المهمات البحري   \n -   المستودع الفرعي للاسلحه \n - مستودع الشاره البحري  \n- مستودع الزخيره الفرعي رقم 1 \n -المستودع الفرعي للمركبات البحريه \n - ورشه المعدات المساحيه و الملاحيه \n - الورشه افرعيه للمركبات البحريه \n - ورشه الانذار و الحرب الالكتونيه \n  - الورشه الفرعيه للاسلحه \n - ورشه الاشاره البحريه \n - المركز الفني الرئيسي للطوربيد البحري \n - المركز الفني الرئيسي للالغام \n - المركز الفني الكيماوي \n - المركز الفني لتحضر الصواريخ"  
      },  
      { 
        id: "6", 
        name: "قيادة قوات حرس الحدود ", 
        info: "الأفرع التابعة له", 
        bransh: "-فرع  الامداد  \n -مراقبه عهده مركبات حرس الحدود \n -شعبه اشاره حرس الحدود \n -الفرع الفني مركبات ", 
        units:"- مستودع رقم 2 مركبات حرس الحدود\n - ورشه اشاره حرس الحدود \n - ورشه المركبات الفرعيه رقم 207 حرس حدود    \n -ورشه مركبات القطاع رقم (1) \n - ورشه المركبات رقم 306 " 
      },
      { id: "7", name: "  قياده المنطقه المركزيه ", info: "الأفرع التابعة له", bransh: "  -فرع الاسلحه و الزخيره" },
      { id: "8", name: "  قياده المنطقه الشماليه ", info: "الأفرع التابعة له", bransh: "  -فرع الوقود \n -فرع المهمات \n - فرع مراقبه العهده \n -فرع الاسلحه و الزخيره " },
      { id: "9", name: "  قياده المنطقه الجنوبيه ", info: "الأفرع التابعة له", bransh: "  -فرع الوقود \n -فرع الامداد " },
      { id: "10", name: "  قياده المنطقه الغربيه ", info: "الأفرع التابعة له", bransh: "  -فرع الوقود \n  - فرع مراقبه العهده    " },
      { id: "11", name: "  قياده الجيش الثاني الميداني  ", info: "الأفرع التابعة له", bransh: "  -فرع الاسلحه و الزخيره   " },
      { id: "12", name: "  قياده الجيش الثالث الميداني  ", info: "الأفرع التابعة له", bransh: "  -فرع الاسلحه "},
      { 
        id: "13", 
        name: "اداره النظم و المعلومات    ", 
        info: "الأفرع التابعة له", 
        bransh: "-مكتب السيد المدير  \n -فرع الامداد \n -فرع التخطيط \n -فرع مراقبه العهده \n - فرع الشئون الفنيه \n -فرع الاحتياجات ", 
        units:"- المستودع الرئيسي لمعدات فرع النظم\n - الورشه الرئيسيه لمعدات فرع النظم \n - مركز التأمين الفني MMC     " 
      },
      { 
        id: "14", 
        name: "اداره   المدرعات    ", 
        info: "الأفرع التابعة له", 
        bransh: " -فرع الامداد \n  -فرع مراقبه العهده \n - فرع الاصلاح    ", 
        units:"- المستودع الرئيسي رقم 67 مدرعات\n - الورشه الرئيسيه لمدرعات رقم 5   \n -    الورشه الرئيسيه رقم 101 مدرعات \n - المستودع الرئيسي رقم 60 مدرعات \n - المستودع الرئيسي للخامات و العدد المجموعات رقم 62 \n المستودع الرئيسي لمرتجعات المدرعات \n - الورشه الفرعيه رقم 102 مدرعات \n - ورشه المدرعات رقم 28 جيش \n - ورشه المدرعات رقم 24 جيش     " 
      },
      { 
        id: "15", 
        name: "اداره   الحرب الكيميائيه    ", 
        info: "الأفرع التابعة له", 
        bransh: " -فرع الامداد \n  -فرع مراقبه العهده \n - فرع الاصلاح    ", 
        units:"- المستودع الرئيسي للحرب الكيميائيه\n - الورشه الرئيسيه للمعدات الكيميائيه   \n -    قسم متقدم المستودع الرئيسي للحرب الكيميائيه \n - معامل الحرب الكيميائيه         " 
      },
      { 
        id: "16", 
        name: "اداره المركبات    ", 
        info: "الأفرع التابعة له", 
        bransh: " -فرع الامداد \n  -فرع مراقبه العهده \n - فرع الاصلاح    ", 
        units:"- المستودع الرئيسي للمركبات رقم 1 \n - المستودع الرئيسي للمركبات رقم 2   \n -    المستودع الرئيسي للمركبات المختلط رقم 3  \n - مستودع الرئيسي للمركبات المختلط رقم 4    \n - المستودع الرئيسي للمركبات رقم 5   \n - الورشه الرئيسيه للمركبات رقم 1 \n - الورشه الرئيسيه للمركبات رقم 3 \n - الورشه الرئيسيه للمركبات رقم 7 \n - الورشه الرئيسيه للمركبات رقم 8 \n - الورشه ارئيسيه رقم 4 مركبات \n -الورشه الرئيسيه للمحركات رقم 6 \n - الورشه الرئيسيه للانتاج و تغير قطع الفيار رقم 11 \n -المستودع الرئيسي للمركبات الكامله رقم 52 \n -المستودع الرئيسي لمرتجاعات لمركبات رقم 1 \n -المستودع الرئيسي لمرتجاعات لمركبات رقم 2 \n -المستودع الرئيسي لمرتجاعات لمركبات رقم 3 \n -المستودع الرئيسي لمرتجاعات لمركبات رقم 4 \n -الورشه الرئيسيه للمحركات رقم 10 \n -المستودع الرئيسي للمركبات الكامله رقم 51  \n -    المستودع الرئيسي للمركبات المختلط رقم 53" 
      },
      { 
        id: "17", 
        name: "اداره الاشاره    ", 
        info: "الأفرع التابعة له", 
        bransh: " -فرع الامداد \n  -فرع مراقبه العهده \n - فرع الاصلاح  \n -فرع التسليح \n -لجنه الاشاره الاستراتيجيه \n -فرع اشاره الجيش الثاني الميداني - فرع اشاره الجيش الثالث الميداني  ", 
        units:"- المستودع الفرعي للاشاره رقم 1 \n - المستودع الرئيسي للاشاره رقم 3   \n - المستودع الرئيسي للاشاره رقم 1  \n -مستودع الاشاره رقم 3    \n - المستودع الرئيسي للمركبات رقم 5   \n - الورشه الرئيسيه للمركبات رقم 1 \n - الورشه الرئيسيه للمركبات رقم 3 \n - الورشه الرئيسيه للمركبات رقم 7 \n - الورشه الرئيسيه للمركبات رقم 8 \n - الورشه ارئيسيه رقم 4 مركبات \n -الورشه الرئيسيه للمحركات رقم 6 \n - الورشه الرئيسيه للانتاج و تغير قطع الفيار رقم 11 \n -المستودع الرئيسي للمركبات الكامله رقم 52 \n -المستودع الرئيسي لمرتجاعات لمركبات رقم 1 \n -المستودع الرئيسي لمرتجاعات لمركبات رقم 2 \n -المستودع الرئيسي لمرتجاعات لمركبات رقم 3 \n -المستودع الرئيسي لمرتجاعات لمركبات رقم 4 \n -الورشه الرئيسيه للمحركات رقم 10 \n -المستودع الرئيسي للمركبات الكامله رقم 51  \n -    المستودع الرئيسي للمركبات المختلط رقم 53" 
      },
      { 
        id: "18", 
        name: "اداره المهندسين العسكريين    ", 
        info: "الأفرع التابعة له", 
        bransh: " -فرع الامداد \n  -فرع مراقبه العهده \n - فرع الاصلاح  \n -فرع الاصلاح ", 
        units:"-  المستودع الرئيسي لذخائر المهندسين \n - المستودع الرئيسي لمعدات المهندسين العسكريين   \n - المستودع الرئيسي لمهمات المهندسين العسكريين  \n -الورشه الرئيسيه للاصلاح رقم 1 م.ع    \n - الورشه الرئيسيه للانتاج رقم 1 م.ع   \n - المستودع الفرعي رقم 10 م.ع  " 
      },
      { 
        id: "19", 
        name: "اداره  النقل    ", 
        info: "الأفرع التابعة له", 
        bransh: " -فرع الامداد \n  -فرع مراقبه العهده \n - فرع الصادرات ", 
        units:"-  ميناء الاسكندريه \n - فوج تشهيلات مطار شرق القاهره   \n - فوج تشهيلات مواني البحر الاحمر و القناه  \n -فوج تشهيلات مواني البحر الابيض المتوسط    \n - مستودع ورشه معدات النقل " 
      },
      { 
        id: "20", 
        name: "اداره  الاشغال العسكريه    ", 
        info: "الأفرع التابعة له", 
        bransh: " -فرع الامداد \n  -فرع مراقبه العهده ", 
        units:"-  الورشه الرئيسيه للاشغال العسكريه \n - المستودع الرئيسي للاشغال العسكريه " 
      },
      { 
        id: "21", 
        name: "اداره  المساحه العسكريه    ", 
        info: "الأفرع التابعة له", 
        bransh: " -فرع الامداد \n  -فرع مراقبه العهده \n -الفرع الفني", 
        units:"-  المستودع الرئيسي للمساحه العسكريه" 
      },
      { 
        id: "22", 
        name: "اداره  الاسلحه الذخيره    ", 
        info: "الأفرع التابعة له", 
        bransh: " -الفرع الفني \n -فرع اسلحه و ذخيره الجيش الثالث الميداني  \n -فرع أ ذ قياده الجيش الثاني الميداني \n -فرع اسلحه و ذخره الجيش الثالث الميداني - فرع الامداد و المشروعات \n -فرع مراقبه العهده (المركز الالي ) \n -فرع اسلحه قياده المنطقه المركزيه ", 
        units:"-  الورشه الرئيسيه لمعدات محطه القدره ا.ذ \n -المستودع الرئيسي رقم 61 ا.ذ \n -المستودع الرئيسي رقم 62 ا.ذ \n -المستودع الرئيسي رقم 63 ا.ذ \n -الورشه الرئيسيه للردار رقم 1 ه.ذ \n -المستودع الرئيسي قزغ راد/صار/م القدره رقم 1 \n -المعامل الرئيسيه للمعايره ا.ذ \n -الورشه الرئيسيه للاسلحه رقم 3 ا.ذ \n -المستودع الرئيسي لمعدات الردار و محطات القدره رقم 3ذ \n -المستودع الرئيسي رقم 24 ه.ذ \n -الورشه الرئيسيه للاسلحه رقم 1 ا.ذ \n - المستودع الرئيسي لمعدات االرادار و محطات القدره رقم 3ذ  \n - المستودع الرئيسي رقم 24 ا.ذ  \n -الورشه الرئيسيه للاسلحه رقم 1 ا.ذ \n - المستودع الرئيسي لمعداتع الصواريخ و محطات القدره رقم 2 \n- المستودع الرئيسي للذخيره رقم 27 (تعبوي) \n - الورش الرئيسيه للصواريخ رقم 1 ا.ذ \n - المستودع الفرعي للاسلحه رقم72 \n-الوحده رقم 1 ذخيره \n - الوحده رقم 1 ذخيره (مستودع رقم 26) \n -المستودع الرئيسي رقم 22 ا.ذ ر المستودع الرئيسي رقم 21 ا.ذ \n الورشه الرئيسيه للذخيره رقم 1 ه.ذ \n - المستودع الرئيسي للخامات و العدد و معدات الورش رقم 68 \n - الورشه الفرعيه للاسلحه رقم 11 (تعبوي) \n - الورشه المستوسطه للردار و الانذار رقم 3 \n - الورشه الفرعيه للاسلحه رقم 12 \n - الورشه الفرعيه للاسلحه رقم 13 (تعبوي) \n - الورشه الفرعيه للاسلحه رقم 14 \n -  الورشه المتوسطه لمعدات القياس و المعايره رقم  1 \n -المستودع الفرعي للاسلحه رقم 37 \n - قياده المنطقه الشماليه (فرع الاسلحه و الذخيره )"  
      },
      { 
        id: "23", 
        name: "اداره  المشروعات  الكبري    ", 
        info: "الأفرع التابعة له", 
        bransh: " -فرع الامداد \n  -فرع مراقبه العهده \n -الفرع الشئون الفنيه", 
        units:"-  المستودع الرئيسي للمباني الجاهزه \n -الورشه الرئيسيه للمباني الجاهزه" 
      },
      { 
        id: "24", 
        name: "اداره  المياه      ", 
        info: "الأفرع التابعة له", 
        bransh: " -فرع الامداد \n  -فرع مراقبه العهده \n -الفرع الاصلاح \n - فرع المعالجه \n - فرع الاعمال الميدانيه ", 
        units:"-  المستودع الرئيسي لمعدات المياه \n -الورشه الرئيسيه لمعدات المياه" 
      },
      { 
        id: "25", 
        name: "اداره  التعيينات      ", 
        info: "الأفرع التابعة له", 
        bransh: " -فرع الامداد \n  -فرع مراقبه العهده \n -الفرع الشئون الفنيه", 
        units:"-  المستودع الرئيسي لمعدات و ادوات التعيينات  \n -الورشه الرئيسيه لاصلاح معدات التعيينات  \n - مستودع التعيينات الرئيسي رقم 302" 
      },
      { 
        id: "26", 
        name: "اداره  الوقود      ", 
        info: "الأفرع التابعة له", 
        bransh: " -فرع الامداد  \n  - فرع مراقبه العهده المنطقه الشماليه  \n  - فرع مراقبه العهده المنطقه الغربيه   \n -فرع الوقود الجوي (قياده القوات الجويه) \n  - فرع وقود المنطقه الجنوبيه (فرع الامداد)  \n  - فرع وقد المنطقه الغربيه \n  - فرع وقد المنطقه الشماليه" , 
        units:"-  مستودع و ورشه معدات الوقود الرئيسي   \n - مستودع الوقود الرئيسي رقم 1  \n - مستودع و معمل الوقود الرئيسي الجوي  \n - مستودع الوقود الرئيسي رقم 33  \n -  مستودع الوقود الميداني رقم 36 \n - مستودع الوقود رقم (17) \n - مصنع الزيوت و السوائل الخاصه \n - معمل تحاليل الوقود و الزيوت" 
      },
      { 
        id: "27", 
        name: "اداره  المهمات ", 
        info: "الأفرع التابعة له", 
        bransh: " -فرع الامداد  \n  - فرع مراقبه العهده   \n -فرع مهمات المنطقه الشماليه العسكريه    \n  - فرع مراقبه العهده المنطقه الشماليه العسكريه " , 
        units:"-  مستودع المهمات رقم 11      \n - المستودع الرئيسي للمهمات رقم 36  \n - مستودع المهمات رقم 37   " 
      },
      { 
        id: "28", 
        name: "اداره  الخدمات الطبيه ", 
        info: "الأفرع التابعة له", 
        bransh: " -فرع الامداد         " , 
        units:"-  مصنع انتاج ادويه القوات المسلحه   \n - المستودع الطبي الرئيسي رقم 1    " 
      },
      { 
        id: "29", 
        name: "اداره  الخدمات البيطريه ", 
        info: "الأفرع التابعة له", 
        bransh: " -فرع الامداد  \n - فرع مراقبه العهده        " , 
        units:" - المستودع البيطري الرئيسي رقم 1    " 
      },
      { 
        id: "30", 
        name: "اداره  الحرب الالكترونيه  ", 
        info: "الأفرع التابعة له", 
        bransh: " -فرع الامداد  \n - فرع مراقبه العهده        " , 
        units:" - المستودع  الرئيسي للحرب الالكترونيه    " 
      },
      { 
        id: "31", 
        name: " اداره  الاطفاء و الانقاذ  ", 
        info: "الأفرع التابعة له", 
        bransh: "      -فرع الاطفاء ق.م  " , 
        units:" - مستودع وورشه معدات الاطفاء    " 
      },
      { 
        id: "32", 
        name: " اداره  المطبوعات و النشر  ", 
        info: "الأفرع التابعة له", 
        bransh: " " , 
        units:" " 
      },
  ];

  const handleClick = (index) => {
    setCurrentTab(index);
  };

  return (
    <div>
      <div className="tab">
        {data.map((button, i) => (
          <button key={button.name} className="tablinks" onClick={() => handleClick(i)}>
            {button.name}
          </button>
        ))}
      </div>

      <div className="tabcontent">
        {currentTab !== -1 && (
          <React.Fragment>
            {/* Always render "الافرع التابعه له" */}
            <h3 style={{color:"red" , padding:"10px"}}>{data[currentTab].name}<br/><br/>الافرع التابعه له</h3>
            <div>
              {data[currentTab].bransh.split('\n').map((line, index) => (
                <p style={{color:"black"}} key={index}>{line}</p>
              ))}
            </div>
            
            {/* Conditionally render "الوحدات التابعة له" if it exists */}
            {data[currentTab].units && (
              <React.Fragment>
                <h3 style={{color:"red" , padding:"10px"}}>الوحدات التابعة له</h3>
                <div>
                  {data[currentTab].units.split('\n').map((line, index) => (
                    <p style={{color:"black"}} key={index}>{line}</p>
                  ))}
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default Tabs;
