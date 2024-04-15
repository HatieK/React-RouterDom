1. Trong Contact Page nên tách component textboxt,sidebar và form thành 1 component riêng
<!-- ======================================================= -->
2. ContactPage là nơi chỉ xử lý logic chính là submit Form 
* Viết hàm handleSubmitForm ở contactPage và khi người dùng bấm nút gửi sẽ chạy hàm này ===> Truyền prop là hàm xuống component ContactForm
* Nhận thấy trong ContactForm có các form-group có thể tái sử dụng lại được ==> Trong folder Component tạo Component Input
* Bỏ nguyên cái form-group vào trong component Input:
* Trong component Input này ta nhận thấy nó cần: 
+ label (Tên trường Email, Số Điện Thoại)
+ required (dấu * có hiển thị hay không) cần truyền giá trị true false, nếu để required thì mặc định là true
+ nhận thấy class formerror để check lỗi, nếu có lỗi thì class đó sẽ xuất hiện, ko thì ko xuất hiện dùng toán tử ? và :
+ Input truyền vào gồm label require placeholder nhưng placeholder chỉ ăn vào ô input nên sẽ bỏ nó vào rest và rest này gọi trong placeholder

3.Trong contactForm viết useState để validate Form
* Nhận useState 1 object là các giá trị value input ban đầu (name,email,phoneNumber,topic,content) là rỗng
* Nhận useState 1 object là các giá trị error
* Viết hàm _onSubmit gắn vào nút gửi
* viết hàm _onChange để lấy value và name của từng ô input
* thêm trường name vào ô input, ko cần value vì mặc định input đã có value
* ******** Xem lại ES6 [NAME]:VALUE;
* viết hàm onSubmit,tạo ra 1 errorObject để check lỗi trước khi submit rồi chekcnhu7 bình thường

====================================================================
Làm component Button
Button nhận vào variant ="primary",children,className,...rest
rest ở đây là sự kiện onClick submit
switch - case class button

  let variantClass = "";
  switch (variant) {
    case "primary":
      variantClass = "btn btn--primary";
      break;
    case "border":
      variantClass = "btn btn--border --black";
      break;
    default:
      break;
  }
<!-- ================================================== -->
Tạo component Select
sử dụng select - option vối value tướng ứng
Khi có UI chỉ thay đổi một element mà element đó lại là 1 component riêng thì sử dụng render props
render props tức là truyền vào 1 prop sẽ return về component đó
và dùng điều kiện để hiển thị ra element đó
bản chất của option select là 1 array object nên ta sẽ khởi tạo một props options = {[
{value:"",label:"--"},
{value:"react",label:"React Js"},
{value:"responsive",label:"Responsive"}
]}

=====================================================
thấy các trường name error value onChange lặp lại nên viết một hàm register return về object

viết hàm validate tách errorObject ra riêng
1. hàm validate này sẽ trả về giá trị cho errorObject
Ex: const errorObject = validate()
2. Tạo rules cho các ô input
3.  const rules = {
      name: [{ required: true, message: "Vui lòng nhập tên" }],
      email: [
        {
          required: true,
          message: "Vui lòng nhập email",
        },
        {
          required: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          message: "Vui lòng nhập đúng định dạng email",
        },
      ],
    };
dùng for in for of duyệt object và arry rồi trả về giá trị object tương ứng

viết hàm requireRule để tái sử dụng các field 
viết hàm regexRule để tái sử dụng các field cần dùng regex

rule.regex in REGEX ==> ví dụ rule.regex là "email" thì key này có tổn tại trong REGEX
2 trường hợp check rule regex là 1 trường hợp tham số truyền vào là 1 dạng string như ví dụ ở trên, 
trường hợp 2 là tham số truyền vào là cả 1 chuỗi regular expression

<!-- CUSTOM HOOK -->
để có thể tái sử dụng được các logic form thì sử dụng custom hook

<!-- coi lại _validate ở useForm -->