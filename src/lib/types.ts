// ============================================
// API Response Types
// ============================================

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

// ============================================
// User
// ============================================

export interface User {
  id: string;
  email: string;
  name?: string;
  phone?: string;
  avatar?: string;
  createdAt: string;
}

// ============================================
// Navigation
// ============================================

export interface MenuItem {
  label: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  children?: MenuItem[];
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

// ============================================
// Common Prop Helpers
// ============================================

export type WithClassName = {
  className?: string;
};

export type WithChildren = {
  children: React.ReactNode;
};
