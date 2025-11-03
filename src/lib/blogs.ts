import hoHoanKiem from "@/assets/ho-hoan-kiem.jpg";
import vanMieu from "@/assets/van-mieu.jpg";
import chuaTranQuoc from "@/assets/chua-tran-quoc.jpg";
import cotCoHanoi from "@/assets/cot-co-hanoi.jpg";
import hoaLo from "@/assets/nha-tu-hoa-lo.jpg";
import nhaHatLon from "@/assets/nha-hat-lon.jpg";
import langBac from "@/assets/lang-bac.jpg";
import hoangThanh from "@/assets/hoang-thanh-thang-long.jpg";
import thanhCoLoa from "@/assets/thanh-co-loa.jpg";
import thapNuoc from "@/assets/thap-nuoc-hang-dau.jpg";
import chuaThay from "@/assets/chua-thay.jpg";
import choDongXuan from "@/assets/cho-dong-xuan.jpg";
import onePillar from "@/assets/one-pillar-pagoda.jpg";
import museum from "@/assets/hochiminh-museum.jpeg";
import nhaSanBacHo from "@/assets/nha-san-bac-ho.jpg";

export type Blog = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  location: string;
};

export const hanoiBlogs: Blog[] = [
  {
    slug: "ho-hoan-kiem",
    title: "Hồ Hoàn Kiếm và Tháp Rùa",
    excerpt:
      "Biểu tượng nghìn năm của Hà Nội, nơi giao thoa giữa lịch sử và nhịp sống hiện đại.",
    content:
      "Hồ Hoàn Kiếm là trái tim của Thủ đô. Buổi sáng sớm, từng nhóm người tản bộ, tập dưỡng sinh quanh hồ trong làn sương mờ. Tháp Rùa lặng yên giữa mặt nước xanh, gợi nhớ truyền thuyết trả gươm của vua Lê. Xung quanh hồ là không gian đi bộ cuối tuần với nhiều hoạt động văn hóa, nghệ thuật đường phố.",
    image: hoHoanKiem,
    location: "Hoàn Kiếm, Hà Nội",
  },
  {
    slug: "van-mieu-quoc-tu-giam",
    title: "Văn Miếu – Quốc Tử Giám",
    excerpt:
      "Quần thể di tích mang đậm dấu ấn hiếu học, nơi tôn vinh truyền thống khoa bảng Việt Nam.",
    content:
      "Văn Miếu – Quốc Tử Giám được xây dựng từ thời Lý, là trường đại học đầu tiên của Việt Nam. Khu di tích gồm nhiều lớp không gian cổ kính, hồ Văn, giếng Thiên Quang và 82 bia tiến sĩ. Đây là điểm đến không thể bỏ qua để cảm nhận chiều sâu văn hóa Thăng Long.",
    image: vanMieu,
    location: "Đống Đa, Hà Nội",
  },
  {
    slug: "chua-tran-quoc",
    title: "Chùa Trấn Quốc bên Hồ Tây",
    excerpt:
      "Ngôi chùa cổ nhất Hà Nội, tọa lạc trên bán đảo nhỏ, thanh tịnh giữa mênh mang sóng nước.",
    content:
      "Chùa Trấn Quốc có lịch sử hơn 1.500 năm, nổi bật với bảo tháp nhiều tầng đỏ thắm. Buổi chiều, mặt trời lặn phía hồ Tây tạo nên khung cảnh vô cùng thơ mộng. Không gian chùa mang lại cảm giác bình yên hiếm có giữa lòng đô thị.",
    image: chuaTranQuoc,
    location: "Tây Hồ, Hà Nội",
  },
  {
    slug: "cot-co-ha-noi",
    title: "Cột Cờ Hà Nội và Bảo tàng Lịch sử Quân sự",
    excerpt:
      "Dấu tích kiến trúc thời Nguyễn và không gian trưng bày lịch sử quân sự Việt Nam.",
    content:
      "Cột Cờ Hà Nội là một trong những công trình còn nguyên vẹn trong thành cổ. Cạnh đó là Bảo tàng Lịch sử Quân sự với nhiều hiện vật, máy bay, xe tăng trưng bày ngoài trời, thích hợp cho gia đình và nhóm bạn yêu lịch sử.",
    image: cotCoHanoi,
    location: "Ba Đình, Hà Nội",
  },
  {
    slug: "nha-tu-hoa-lo",
    title: "Nhà tù Hỏa Lò",
    excerpt:
      "Không gian ký ức về một thời đấu tranh kiên cường, nhiều trưng bày công phu, xúc động.",
    content:
      "Di tích Nhà tù Hỏa Lò ghi dấu nhiều câu chuyện lịch sử đặc biệt. Các phòng trưng bày tái hiện đời sống tù nhân, những cuộc vượt ngục, và cả giai đoạn nơi đây được sử dụng với tên gọi 'Hilton Hanoi' trong chiến tranh.",
    image: hoaLo,
    location: "Hoàn Kiếm, Hà Nội",
  },
  {
    slug: "nha-hat-lon",
    title: "Nhà hát Lớn Hà Nội",
    excerpt:
      "Công trình kiến trúc Pháp đặc sắc, điểm hẹn của âm nhạc và nghệ thuật thủ đô.",
    content:
      "Nhà hát Lớn nằm ở vị trí trang trọng gần Hồ Gươm, nổi bật với kiến trúc tân cổ điển. Buổi tối, ánh đèn rực rỡ tạo nên một khung cảnh rất 'Paris giữa lòng Hà Nội'.",
    image: nhaHatLon,
    location: "Hoàn Kiếm, Hà Nội",
  },
  {
    slug: "lang-bac",
    title: "Lăng Chủ tịch Hồ Chí Minh",
    excerpt:
      "Địa điểm thiêng liêng, nơi nhân dân vào viếng Bác và tham quan Quảng trường Ba Đình.",
    content:
      "Tổ hợp Lăng Bác, Bảo tàng Hồ Chí Minh và Phủ Chủ tịch là cụm tham quan quan trọng. Hãy lưu ý thời gian mở cửa theo mùa và quy định trang phục khi vào viếng.",
    image: langBac,
    location: "Ba Đình, Hà Nội",
  },
  {
    slug: "hoang-thanh-thang-long",
    title: "Hoàng thành Thăng Long",
    excerpt:
      "Di sản văn hóa thế giới với các tầng trầm tích lịch sử kéo dài qua nhiều triều đại.",
    content:
      "Khu di sản có nhiều điểm check-in đẹp như Cổng Đoan Môn, Điện Kính Thiên và khu khảo cổ. Cuối tuần thường có các hoạt động trải nghiệm cho trẻ em.",
    image: hoangThanh,
    location: "Ba Đình, Hà Nội",
  },
  {
    slug: "thanh-co-loa",
    title: "Thành Cổ Loa",
    excerpt:
      "Kinh đô xưa của Âu Lạc, nổi tiếng với truyền thuyết An Dương Vương – Mị Châu, Trọng Thủy.",
    content:
      "Cổ Loa cách trung tâm khoảng 16km, thích hợp đi nửa ngày. Quần thể rộng lớn với các vòng thành, đền Thượng và giếng Ngọc.",
    image: thanhCoLoa,
    location: "Đông Anh, Hà Nội",
  },
  {
    slug: "thap-nuoc-hang-dau",
    title: "Tháp nước Hàng Đậu",
    excerpt:
      "Công trình cấp nước cổ, nay là điểm chụp ảnh độc đáo giữa phố cổ Hà Nội.",
    content:
      "Nằm ở nút giao nhiều tuyến phố, tháp nước Hàng Đậu nổi bật với kiến trúc tròn. Khu vực xung quanh thuận tiện kết hợp dạo phố cổ và thử các món quà vặt.",
    image: thapNuoc,
    location: "Ba Đình – Hoàn Kiếm, Hà Nội",
  },
  {
    slug: "chua-thay",
    title: "Chùa Thầy",
    excerpt:
      "Quần thể chùa, hang động và hồ nước thơ mộng dưới chân núi Sài Sơn.",
    content:
      "Chùa Thầy cách trung tâm khoảng 25km, nổi tiếng với múa rối nước truyền thống. Mùa lễ hội rất đông, nên đi sớm để tận hưởng không gian yên bình.",
    image: chuaThay,
    location: "Quốc Oai, Hà Nội",
  },
  {
    slug: "cho-dong-xuan",
    title: "Chợ Đồng Xuân",
    excerpt:
      "Khu chợ đầu mối lâu đời, sôi động với đủ mặt hàng và ẩm thực đường phố.",
    content:
      "Chợ Đồng Xuân là điểm lý tưởng để cảm nhận nhịp sống buôn bán của người Hà Nội. Đừng quên thưởng thức bún chả, phở cuốn và các món quà vặt quanh chợ.",
    image: choDongXuan,
    location: "Hoàn Kiếm, Hà Nội",
  },
  {
    slug: "chua-mot-cot",
    title: "Chùa Một Cột",
    excerpt:
      "Biểu tượng kiến trúc độc đáo, gợi hình bông sen nở trên mặt nước.",
    content:
      "Khuôn viên chùa nhỏ nhưng rất đông khách ghé thăm, thuận tiện kết hợp lịch trình Lăng Bác – Bảo tàng Hồ Chí Minh.",
    image: onePillar,
    location: "Ba Đình, Hà Nội",
  },
  {
    slug: "bao-tang-ho-chi-minh",
    title: "Bảo tàng Hồ Chí Minh",
    excerpt: "Không gian trưng bày hiện đại về cuộc đời và sự nghiệp của Bác.",
    content:
      "Bảo tàng có nhiều phòng chuyên đề, ứng dụng trưng bày sáng tạo. Kết hợp tham quan Phủ Chủ tịch và Nhà sàn Bác Hồ gần đó.",
    image: museum,
    location: "Ba Đình, Hà Nội",
  },
  {
    slug: "nha-san-bac-ho",
    title: "Nhà sàn Bác Hồ",
    excerpt:
      "Không gian làm việc và sinh hoạt giản dị của Chủ tịch Hồ Chí Minh.",
    content:
      "Khu nhà sàn nằm trong Phủ Chủ tịch, phủ đầy cây xanh và mặt nước. Đây là điểm dừng chân lắng đọng trong hành trình khám phá Ba Đình.",
    image: nhaSanBacHo,
    location: "Ba Đình, Hà Nội",
  },
];

export function getBlogBySlug(slug: string): Blog | undefined {
  return hanoiBlogs.find((b) => b.slug === slug);
}
