type Language = "EN" | "VI";

type Dictionary = Record<string, { EN: string; VI: string }>;

const dictionary: Dictionary = {
  // Navbar
  nav_login: { EN: "Log In", VI: "Đăng nhập" },
  nav_signup: { EN: "Sign Up", VI: "Đăng ký" },
  nav_popular_searches: { EN: "Popular Searches", VI: "Tìm kiếm phổ biến" },
  nav_search_placeholder: {
    EN: "Search destinations, tours...",
    VI: "Tìm điểm đến, tour...",
  },
  nav_search_mobile_placeholder: {
    EN: "Search destinations...",
    VI: "Tìm điểm đến...",
  },

  // Hero Slider
  hero_slide_0_subtitle: {
    EN: "Discover the ancient temples and history of Vietnam",
    VI: "Khám phá các ngôi chùa cổ và lịch sử Việt Nam",
  },
  hero_slide_1_subtitle: {
    EN: "Explore the ancient temples and history of Vietnam",
    VI: "Khám phá các ngôi chùa cổ và lịch sử Việt Nam",
  },
  hero_slide_2_subtitle: {
    EN: "Explore the history and culture of Vietnam",
    VI: "Khám phá lịch sử và văn hóa Việt Nam",
  },

  // Index page
  idx_where_to_go: { EN: "Where do you want to go?", VI: "Bạn muốn đi đâu?" },
  idx_search: { EN: "Search", VI: "Tìm kiếm" },
  idx_featured_tours: { EN: "Featured Tours", VI: "Tour nổi bật" },
  idx_featured_sub: {
    EN: "Handpicked experiences for your next adventure",
    VI: "Những trải nghiệm được tuyển chọn cho chuyến đi kế tiếp",
  },
  idx_view_all: { EN: "View All Tours", VI: "Xem tất cả tour" },
  idx_landmarks: { EN: "Famous Landmarks", VI: "Địa danh nổi tiếng" },
  idx_landmarks_sub: {
    EN: "Discover iconic destinations across Hanoi city",
    VI: "Khám phá các điểm đến biểu tượng khắp thành phố Hà Nội",
  },
  idx_landmark_ho_chi_minh: {
    EN: "Ho Chi Minh Mausoleum, Vietnam",
    VI: "Lăng Chủ tịch Hồ Chí Minh, Việt Nam",
  },
  idx_landmark_nha_hat_lon: {
    EN: "Nha Hat Lon, Vietnam",
    VI: "Nhà hát Lớn, Việt Nam",
  },

  // AllTours page
  all_home: { EN: "Home", VI: "Trang chủ" },
  all_all_tours: { EN: "All Tours", VI: "Tất cả tour" },
  all_filter_tours: { EN: "Filter Tours", VI: "Lọc tour" },
  all_tour_type: { EN: "Tour Type", VI: "Loại tour" },
  all_departure: { EN: "Departure Point", VI: "Điểm khởi hành" },
  all_destination: { EN: "Destination", VI: "Điểm đến" },
  all_transportation: { EN: "Transportation", VI: "Phương tiện" },
  all_all_types: { EN: "All types", VI: "Tất cả" },
  all_all_cities: { EN: "All cities", VI: "Tất cả thành phố" },
  all_any_destination: { EN: "Any destination", VI: "Bất kỳ điểm đến" },
  all_tours_for: { EN: "Tours for", VI: "Tour cho" },
  all_found_singular: { EN: "tour found", VI: "tour" },
  all_found_plural: { EN: "tours found", VI: "tour" },
  all_no_tours: {
    EN: "No tours found matching your criteria",
    VI: "Không tìm thấy tour phù hợp",
  },
  all_try_adjust: {
    EN: "Try adjusting your filters or search query",
    VI: "Hãy thử thay đổi bộ lọc hoặc từ khóa",
  },

  // Footer
  ft_contact_us: { EN: "Contact Us", VI: "Liên hệ" },
  ft_find_us: { EN: "Find Us", VI: "Tìm chúng tôi" },
  ft_we_accept: { EN: "We accept:", VI: "Chấp nhận:" },
  ft_follow_us: { EN: "Follow us:", VI: "Theo dõi chúng tôi:" },
  ft_copyright: { EN: "All rights reserved.", VI: "Bảo lưu mọi quyền." },
  ft_company_desc: {
    EN: "Your gateway to unforgettable adventures across Vietnam. Discover the beauty, culture, and wonders of Vietnam with expert-guided tours.",
    VI: "Cánh cửa dẫn đến những cuộc phiêu lưu khó quên khắp Việt Nam. Khám phá vẻ đẹp, văn hóa và kỳ quan của Việt Nam với các tour có hướng dẫn viên chuyên nghiệp.",
  },

  // Special Offers
  idx_special_offers: { EN: "Special Offers", VI: "Ưu đãi đặc biệt" },
  idx_offers_desc: {
    EN: "Promotions, deals and special offers for you",
    VI: "Khuyến mãi, ưu đãi và các chương trình đặc biệt dành cho bạn",
  },
  idx_select_date: { EN: "Select departure date", VI: "Chọn ngày đi" },
  idx_view_offer: { EN: "View Offer", VI: "Xem ưu đãi" },
  idx_offer_early_bird: {
    EN: "Early Bird Special",
    VI: "Ưu đãi đặt sớm",
  },
  idx_offer_early_bird_desc: {
    EN: "Book 30 days in advance and save up to 25% on selected tours",
    VI: "Đặt trước 30 ngày và tiết kiệm đến 25% cho các tour được chọn",
  },
  idx_offer_weekend: { EN: "Weekend Getaway", VI: "Du lịch cuối tuần" },
  idx_offer_weekend_desc: {
    EN: "Perfect weekend tours with special discounts for groups",
    VI: "Tour cuối tuần hoàn hảo với ưu đãi đặc biệt cho nhóm",
  },
  idx_offer_cultural: {
    EN: "Cultural Heritage",
    VI: "Di sản văn hóa",
  },
  idx_offer_cultural_desc: {
    EN: "Explore ancient temples and historical sites with exclusive offers",
    VI: "Khám phá các ngôi chùa cổ và di tích lịch sử với ưu đãi độc quyền",
  },
  idx_tour_available: {
    EN: "tour available",
    VI: "tour có sẵn",
  },
  idx_tours_available: {
    EN: "tours available",
    VI: "tour có sẵn",
  },
  idx_with_offer: {
    EN: "with this offer",
    VI: "với ưu đãi này",
  },

  // Tour Detail
  td_tour_not_found: { EN: "Tour not found", VI: "Không tìm thấy tour" },
  td_tour_not_found_desc: {
    EN: "The tour you're looking for doesn't exist or has been removed.",
    VI: "Tour bạn đang tìm không tồn tại hoặc đã bị xóa.",
  },
  td_go_back: { EN: "Go Back", VI: "Quay lại" },
  td_home: { EN: "Home", VI: "Trang chủ" },
  td_tours: { EN: "Tours", VI: "Tour" },
  td_reviews: { EN: "reviews", VI: "đánh giá" },
  td_about_tour: { EN: "About this tour", VI: "Về tour này" },
  td_tour_details: { EN: "Tour Details", VI: "Chi tiết tour" },
  td_destination: { EN: "Destination", VI: "Điểm đến" },
  td_departure: { EN: "Departure", VI: "Điểm khởi hành" },
  td_tour_type: { EN: "Tour Type", VI: "Loại tour" },
  td_transportation: { EN: "Transportation", VI: "Phương tiện" },
  td_per_person: { EN: "/ person", VI: "/ người" },
  td_price_includes: {
    EN: "Price includes all taxes and fees",
    VI: "Giá đã bao gồm tất cả thuế và phí",
  },
  td_book_now: { EN: "Book Now", VI: "Đặt ngay" },
  td_add_wishlist: {
    EN: "Add to Wishlist",
    VI: "Thêm vào yêu thích",
  },
  td_whats_included: {
    EN: "What's included",
    VI: "Bao gồm những gì",
  },
  td_guide: {
    EN: "Professional tour guide",
    VI: "Hướng dẫn viên chuyên nghiệp",
  },
  td_transport: { EN: "Transportation", VI: "Phương tiện di chuyển" },
  td_tickets: { EN: "Entry tickets", VI: "Vé vào cửa" },
  td_support: { EN: "24/7 support", VI: "Hỗ trợ 24/7" },

  // Index page additional
  idx_travel_blog: {
    EN: "Travel Blog Hà Nội",
    VI: "Blog du lịch Hà Nội",
  },
  idx_blog_desc: {
    EN: "Short stories about famous landmarks.",
    VI: "Những câu chuyện ngắn về địa danh nổi tiếng.",
  },
  idx_view_all_blog: { EN: "View All", VI: "Xem tất cả" },

  // Blog pages
  blog_not_found: {
    EN: "Blog post not found or has been moved.",
    VI: "Bài viết không tồn tại hoặc đã được di chuyển.",
  },
  blog_back_to_list: {
    EN: "← Back to list",
    VI: "← Quay về danh sách",
  },
  // Blog titles and excerpts
  blog_ho_hoan_kiem_title: {
    EN: "Hoan Kiem Lake and Turtle Tower",
    VI: "Hồ Hoàn Kiếm và Tháp Rùa",
  },
  blog_ho_hoan_kiem_excerpt: {
    EN: "The thousand-year symbol of Hanoi, where history and modern life intersect.",
    VI: "Biểu tượng nghìn năm của Hà Nội, nơi giao thoa giữa lịch sử và nhịp sống hiện đại.",
  },
  blog_van_mieu_quoc_tu_giam_title: {
    EN: "Temple of Literature – Imperial Academy",
    VI: "Văn Miếu – Quốc Tử Giám",
  },
  blog_van_mieu_quoc_tu_giam_excerpt: {
    EN: "A complex of monuments deeply marked by the tradition of learning, honoring Vietnam's scholarly tradition.",
    VI: "Quần thể di tích mang đậm dấu ấn hiếu học, nơi tôn vinh truyền thống khoa bảng Việt Nam.",
  },
  blog_chua_tran_quoc_title: {
    EN: "Tran Quoc Pagoda by West Lake",
    VI: "Chùa Trấn Quốc bên Hồ Tây",
  },
  blog_chua_tran_quoc_excerpt: {
    EN: "Hanoi's oldest pagoda, located on a small peninsula, serene amidst vast waters.",
    VI: "Ngôi chùa cổ nhất Hà Nội, tọa lạc trên bán đảo nhỏ, thanh tịnh giữa mênh mang sóng nước.",
  },
  blog_cot_co_ha_noi_title: {
    EN: "Hanoi Flag Tower and Military History Museum",
    VI: "Cột Cờ Hà Nội và Bảo tàng Lịch sử Quân sự",
  },
  blog_cot_co_ha_noi_excerpt: {
    EN: "Architectural remains from the Nguyen Dynasty and a space displaying Vietnam's military history.",
    VI: "Dấu tích kiến trúc thời Nguyễn và không gian trưng bày lịch sử quân sự Việt Nam.",
  },
  blog_nha_tu_hoa_lo_title: {
    EN: "Hoa Lo Prison",
    VI: "Nhà tù Hỏa Lò",
  },
  blog_nha_tu_hoa_lo_excerpt: {
    EN: "A space of memory about a time of resilient struggle, with elaborate and moving displays.",
    VI: "Không gian ký ức về một thời đấu tranh kiên cường, nhiều trưng bày công phu, xúc động.",
  },
  blog_nha_hat_lon_title: {
    EN: "Hanoi Opera House",
    VI: "Nhà hát Lớn Hà Nội",
  },
  blog_nha_hat_lon_excerpt: {
    EN: "A distinctive French architectural work, the meeting point of music and art in the capital.",
    VI: "Công trình kiến trúc Pháp đặc sắc, điểm hẹn của âm nhạc và nghệ thuật thủ đô.",
  },
  blog_lang_bac_title: {
    EN: "Ho Chi Minh Mausoleum",
    VI: "Lăng Chủ tịch Hồ Chí Minh",
  },
  blog_lang_bac_excerpt: {
    EN: "A sacred site where people visit Uncle Ho and explore Ba Dinh Square.",
    VI: "Địa điểm thiêng liêng, nơi nhân dân vào viếng Bác và tham quan Quảng trường Ba Đình.",
  },
  blog_hoang_thanh_thang_long_title: {
    EN: "Thang Long Imperial Citadel",
    VI: "Hoàng thành Thăng Long",
  },
  blog_hoang_thanh_thang_long_excerpt: {
    EN: "World cultural heritage with historical layers spanning many dynasties.",
    VI: "Di sản văn hóa thế giới với các tầng trầm tích lịch sử kéo dài qua nhiều triều đại.",
  },
  blog_thanh_co_loa_title: {
    EN: "Co Loa Citadel",
    VI: "Thành Cổ Loa",
  },
  blog_thanh_co_loa_excerpt: {
    EN: "The ancient capital of Au Lac, famous for the legend of An Duong Vuong – My Chau, Trong Thuy.",
    VI: "Kinh đô xưa của Âu Lạc, nổi tiếng với truyền thuyết An Dương Vương – Mị Châu, Trọng Thủy.",
  },
  blog_thap_nuoc_hang_dau_title: {
    EN: "Hang Dau Water Tower",
    VI: "Tháp nước Hàng Đậu",
  },
  blog_thap_nuoc_hang_dau_excerpt: {
    EN: "An ancient water supply structure, now a unique photo spot in Hanoi's Old Quarter.",
    VI: "Công trình cấp nước cổ, nay là điểm chụp ảnh độc đáo giữa phố cổ Hà Nội.",
  },
  blog_chua_thay_title: {
    EN: "Thay Pagoda",
    VI: "Chùa Thầy",
  },
  blog_chua_thay_excerpt: {
    EN: "A complex of pagoda, caves and a poetic lake at the foot of Sai Son Mountain.",
    VI: "Quần thể chùa, hang động và hồ nước thơ mộng dưới chân núi Sài Sơn.",
  },
  blog_cho_dong_xuan_title: {
    EN: "Dong Xuan Market",
    VI: "Chợ Đồng Xuân",
  },
  blog_cho_dong_xuan_excerpt: {
    EN: "A long-standing wholesale market, bustling with all kinds of goods and street food.",
    VI: "Khu chợ đầu mối lâu đời, sôi động với đủ mặt hàng và ẩm thực đường phố.",
  },
  blog_chua_mot_cot_title: {
    EN: "One Pillar Pagoda",
    VI: "Chùa Một Cột",
  },
  blog_chua_mot_cot_excerpt: {
    EN: "A unique architectural symbol, resembling a lotus flower blooming on the water.",
    VI: "Biểu tượng kiến trúc độc đáo, gợi hình bông sen nở trên mặt nước.",
  },
  blog_bao_tang_ho_chi_minh_title: {
    EN: "Ho Chi Minh Museum",
    VI: "Bảo tàng Hồ Chí Minh",
  },
  blog_bao_tang_ho_chi_minh_excerpt: {
    EN: "A modern exhibition space about Uncle Ho's life and career.",
    VI: "Không gian trưng bày hiện đại về cuộc đời và sự nghiệp của Bác.",
  },
  blog_nha_san_bac_ho_title: {
    EN: "Uncle Ho's Stilt House",
    VI: "Nhà sàn Bác Hồ",
  },
  blog_nha_san_bac_ho_excerpt: {
    EN: "The simple working and living space of President Ho Chi Minh.",
    VI: "Không gian làm việc và sinh hoạt giản dị của Chủ tịch Hồ Chí Minh.",
  },
  // Blog content translations
  blog_ho_hoan_kiem_content: {
    EN: "Hoan Kiem Lake is the heart of the capital. Early in the morning, groups of people stroll and practice qigong around the lake in the mist. The Turtle Tower stands quietly in the blue water, recalling the legend of King Le returning the sword. Around the lake is a weekend walking space with many cultural and street art activities.",
    VI: "Hồ Hoàn Kiếm là trái tim của Thủ đô. Buổi sáng sớm, từng nhóm người tản bộ, tập dưỡng sinh quanh hồ trong làn sương mờ. Tháp Rùa lặng yên giữa mặt nước xanh, gợi nhớ truyền thuyết trả gươm của vua Lê. Xung quanh hồ là không gian đi bộ cuối tuần với nhiều hoạt động văn hóa, nghệ thuật đường phố.",
  },
  blog_van_mieu_quoc_tu_giam_content: {
    EN: "Temple of Literature – Imperial Academy was built during the Ly Dynasty and is Vietnam's first university. The complex includes many layers of ancient spaces, Van Lake, Thien Quang Well and 82 doctoral steles. This is an unmissable destination to feel the cultural depth of Thang Long.",
    VI: "Văn Miếu – Quốc Tử Giám được xây dựng từ thời Lý, là trường đại học đầu tiên của Việt Nam. Khu di tích gồm nhiều lớp không gian cổ kính, hồ Văn, giếng Thiên Quang và 82 bia tiến sĩ. Đây là điểm đến không thể bỏ qua để cảm nhận chiều sâu văn hóa Thăng Long.",
  },
  blog_chua_tran_quoc_content: {
    EN: "Tran Quoc Pagoda has a history of more than 1,500 years, notable for its many-tiered red stupa. In the afternoon, the sunset over West Lake creates an extremely poetic scene. The pagoda space brings a rare sense of peace in the heart of the city.",
    VI: "Chùa Trấn Quốc có lịch sử hơn 1.500 năm, nổi bật với bảo tháp nhiều tầng đỏ thắm. Buổi chiều, mặt trời lặn phía hồ Tây tạo nên khung cảnh vô cùng thơ mộng. Không gian chùa mang lại cảm giác bình yên hiếm có giữa lòng đô thị.",
  },
  blog_cot_co_ha_noi_content: {
    EN: "Hanoi Flag Tower is one of the intact works in the ancient citadel. Next to it is the Military History Museum with many artifacts, aircraft, and tanks displayed outdoors, suitable for families and groups of history lovers.",
    VI: "Cột Cờ Hà Nội là một trong những công trình còn nguyên vẹn trong thành cổ. Cạnh đó là Bảo tàng Lịch sử Quân sự với nhiều hiện vật, máy bay, xe tăng trưng bày ngoài trời, thích hợp cho gia đình và nhóm bạn yêu lịch sử.",
  },
  blog_nha_tu_hoa_lo_content: {
    EN: "Hoa Lo Prison relic marks many special historical stories. The exhibition rooms recreate the life of prisoners, escape attempts, and even the period when this place was used with the name 'Hilton Hanoi' during the war.",
    VI: "Di tích Nhà tù Hỏa Lò ghi dấu nhiều câu chuyện lịch sử đặc biệt. Các phòng trưng bày tái hiện đời sống tù nhân, những cuộc vượt ngục, và cả giai đoạn nơi đây được sử dụng với tên gọi 'Hilton Hanoi' trong chiến tranh.",
  },
  blog_nha_hat_lon_content: {
    EN: "The Opera House is located in a dignified position near Ho Guom, prominent with neoclassical architecture. In the evening, the brilliant lights create a very 'Paris in the heart of Hanoi' scene.",
    VI: "Nhà hát Lớn nằm ở vị trí trang trọng gần Hồ Gươm, nổi bật với kiến trúc tân cổ điển. Buổi tối, ánh đèn rực rỡ tạo nên một khung cảnh rất 'Paris giữa lòng Hà Nội'.",
  },
  blog_lang_bac_content: {
    EN: "The complex of Uncle Ho's Mausoleum, Ho Chi Minh Museum and Presidential Palace is an important tourist cluster. Please note the seasonal opening hours and dress code when visiting.",
    VI: "Tổ hợp Lăng Bác, Bảo tàng Hồ Chí Minh và Phủ Chủ tịch là cụm tham quan quan trọng. Hãy lưu ý thời gian mở cửa theo mùa và quy định trang phục khi vào viếng.",
  },
  blog_hoang_thanh_thang_long_content: {
    EN: "The heritage site has many beautiful check-in points such as Doan Mon Gate, Kinh Thien Palace and the archaeological area. Weekends often have experiential activities for children.",
    VI: "Khu di sản có nhiều điểm check-in đẹp như Cổng Đoan Môn, Điện Kính Thiên và khu khảo cổ. Cuối tuần thường có các hoạt động trải nghiệm cho trẻ em.",
  },
  blog_thanh_co_loa_content: {
    EN: "Co Loa is about 16km from the center, suitable for a half-day trip. The large complex includes ramparts, Thuong Temple and Ngoc Well.",
    VI: "Cổ Loa cách trung tâm khoảng 16km, thích hợp đi nửa ngày. Quần thể rộng lớn với các vòng thành, đền Thượng và giếng Ngọc.",
  },
  blog_thap_nuoc_hang_dau_content: {
    EN: "Located at the intersection of many streets, Hang Dau Water Tower stands out with its circular architecture. The surrounding area is convenient for combining old quarter walking and trying snacks.",
    VI: "Nằm ở nút giao nhiều tuyến phố, tháp nước Hàng Đậu nổi bật với kiến trúc tròn. Khu vực xung quanh thuận tiện kết hợp dạo phố cổ và thử các món quà vặt.",
  },
  blog_chua_thay_content: {
    EN: "Thay Pagoda is about 25km from the center, famous for traditional water puppetry. The festival season is very crowded, so go early to enjoy the peaceful space.",
    VI: "Chùa Thầy cách trung tâm khoảng 25km, nổi tiếng với múa rối nước truyền thống. Mùa lễ hội rất đông, nên đi sớm để tận hưởng không gian yên bình.",
  },
  blog_cho_dong_xuan_content: {
    EN: "Dong Xuan Market is an ideal place to feel the trading pace of Hanoi people. Don't forget to enjoy bun cha, pho cuon and snacks around the market.",
    VI: "Chợ Đồng Xuân là điểm lý tưởng để cảm nhận nhịp sống buôn bán của người Hà Nội. Đừng quên thưởng thức bún chả, phở cuốn và các món quà vặt quanh chợ.",
  },
  blog_chua_mot_cot_content: {
    EN: "The pagoda grounds are small but very crowded with visitors, convenient for combining with Uncle Ho's Mausoleum – Ho Chi Minh Museum itinerary.",
    VI: "Khuôn viên chùa nhỏ nhưng rất đông khách ghé thăm, thuận tiện kết hợp lịch trình Lăng Bác – Bảo tàng Hồ Chí Minh.",
  },
  blog_bao_tang_ho_chi_minh_content: {
    EN: "The museum has many thematic rooms with creative display applications. Combine with visiting the nearby Presidential Palace and Uncle Ho's Stilt House.",
    VI: "Bảo tàng có nhiều phòng chuyên đề, ứng dụng trưng bày sáng tạo. Kết hợp tham quan Phủ Chủ tịch và Nhà sàn Bác Hồ gần đó.",
  },
  blog_nha_san_bac_ho_content: {
    EN: "The stilt house area is located in the Presidential Palace, covered with trees and water. This is a contemplative stop in the journey to explore Ba Dinh.",
    VI: "Khu nhà sàn nằm trong Phủ Chủ tịch, phủ đầy cây xanh và mặt nước. Đây là điểm dừng chân lắng đọng trong hành trình khám phá Ba Đình.",
  },

  idx_why_joigo: {
    EN: "Why choose Joigo?",
    VI: "Tại sao chọn Joigo?",
  },
  idx_why_joigo_desc: {
    EN: "4 reasons why Joigo is the ideal companion for your journey to explore Hanoi.",
    VI: "4 lý do khiến Joigo là người bạn đồng hành lý tưởng cho hành trình khám phá Hà Nội.",
  },
  idx_trust: {
    EN: "Trust & Transparency",
    VI: "Uy tín & minh bạch",
  },
  idx_trust_desc: {
    EN: "Service quality commitment, clear information, no hidden costs.",
    VI: "Cam kết chất lượng dịch vụ, thông tin rõ ràng, không chi phí ẩn.",
  },
  idx_experience: {
    EN: "Curated Experiences",
    VI: "Trải nghiệm chọn lọc",
  },
  idx_experience_desc: {
    EN: "Streamlined itineraries, unique destinations, optimized travel time.",
    VI: "Lịch trình tinh gọn, điểm đến đặc sắc, tối ưu thời gian di chuyển.",
  },
  idx_support_247: { EN: "24/7 Support", VI: "Hỗ trợ 24/7" },
  idx_support_247_desc: {
    EN: "Accompanying before, during and after the trip through multiple communication channels.",
    VI: "Đồng hành trước – trong – sau chuyến đi qua nhiều kênh liên lạc.",
  },
  idx_local: {
    EN: "Local Hanoi Knowledge",
    VI: "Hiểu Hà Nội bản địa",
  },
  idx_local_desc: {
    EN: "Food, culture and history suggestions from a Hanoi local's perspective.",
    VI: "Gợi ý ẩm thực – văn hóa – lịch sử từ góc nhìn của người Hà Nội.",
  },

  // Contact Form
  contact_more_to_explore: {
    EN: "More to Explore",
    VI: "Khám phá thêm",
  },
  contact_desc: {
    EN: "Leave your contact information and we'll help you plan your perfect adventure",
    VI: "Để lại thông tin liên hệ và chúng tôi sẽ giúp bạn lập kế hoạch cho chuyến phiêu lưu hoàn hảo",
  },
  contact_email: { EN: "Email", VI: "Email" },
  contact_phone: { EN: "Phone", VI: "Số điện thoại" },
  contact_message: { EN: "Message", VI: "Tin nhắn" },
  contact_email_placeholder: {
    EN: "your.email@example.com",
    VI: "email.cua.ban@example.com",
  },
  contact_phone_placeholder: {
    EN: "+84 123 456 789",
    VI: "+84 123 456 789",
  },
  contact_message_placeholder: {
    EN: "Tell us about your travel plans...",
    VI: "Hãy cho chúng tôi biết về kế hoạch du lịch của bạn...",
  },
  contact_submit: {
    EN: "Request Consultation",
    VI: "Yêu cầu tư vấn",
  },
  contact_success: {
    EN: "Thank you! We'll contact you soon.",
    VI: "Cảm ơn bạn! Chúng tôi sẽ liên hệ với bạn sớm.",
  },
  contact_scan_qr: {
    EN: "Scan QR code to get consultation",
    VI: "Quét mã QR để nhận tư vấn",
  },
};

export function t(
  language: Language,
  key: keyof typeof dictionary,
  params?: Record<string, string | number>
) {
  const entry = dictionary[key];
  let text = entry ? entry[language] : key;
  if (params) {
    Object.entries(params).forEach(([k, v]) => {
      text = text.replace(new RegExp(`{${k}}`, "g"), String(v));
    });
  }
  return text;
}

export type { Language };
