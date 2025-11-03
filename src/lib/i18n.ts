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
