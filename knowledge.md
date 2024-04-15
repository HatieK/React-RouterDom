**********Nên xem lại clip state vài lần*************
Tham số của useState là giá trị mặc định của state

Mỗi một hook useState tương ứng một biến

khi tham số của useState là 1 callback function thì nên viết theo dạng arrow function chứ ko nên gọi lại một hàm đã được viết sẵn bên ngoài vì làm như vậy mỗi khi state thay đổi sẽ gọi lại hàm đó (video ngày 2 ==> phút trước 19)

lưu ý setFunction tức setCount trong ví dụ của hàm incrementCount thì giá trị count sẽ không thay đổi ngay hàm setCount đó mà hàm setCount đó nó chỉ request yêu cầu render giao diện mới với 1 giá trị count mới

khi có quá nhiều setState được gọi trong một function. React sẽ chỉ nhận giá trị setState sau cùng

<!-- TODO LIST -->
* tạo state chứa giá trị của mảng todo ban đầu của TodoList

* ở todoList component sẽ viết hàm handleAddTodo và truyền nó xuống cho TodoForm

* hàm handleAddTodo này sẽ setState lại giá trị của mảng todoDataList;

* hàm này sẽ chỉ setState lại và thêm mới 1 todo với tham số truyền vào là tên Todo (tên của todo sẽ được định ra ở component Todo Form)

* tạo state chứa giá trị của ô input
B1:Trong TodoForm viết hàm cho onChange và value vào Input Component;
B2: hàm onChange sẽ để setState lại giá trị value của ô input
B3:trong component Form sẽ viết hàm cho onSubmit để submit form, hàm onSubmit này sẽ check xem giá trị ô input có rỗng không và gọi 1 prop truyền từ todoList (prop này chính là để hiện ra tên của todo )

==> Mỗi todo được tạo ra sẽ có đủ id name và trạng thái complete mặc định là false

Khi 1 todo được add nó sẽ render ở component TodoItem khi dùng hàm map 
Nhưng ở TodoItem khi 1 todo được add sẽ có 2 trạng thái là sẽ hiển thị 3 nút edit delete done hoặc save (nút save để save mới lại giá trị todo khi edit)

* vậy nên để biết todo được add vào sẽ ở trạng thái nào ta sẽ tạo thêm 1 state editing mặc định là false và ta sẽ gắn vào nút Edit một hàm để setState lại là true để hiện ra nút Save (toán tử ? : để render)

* khi hiện ra nút save sẽ có dạng input và chính là kiểu dạng Form như ở TodoForm Component

* ta cũng tạo mới 1 state chứa giá trị value ô input ở nút Save, onSubmit ở Form viết 1 hàm onSaveClick hàm này để lấy giá trị setValueInput đồng thời cũng setState editing lại là false để nó về lại giá trị 3 nút

* 