CREATE TABLE IF NOT EXISTS `departments` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `hospital_code` VARCHAR(32) NOT NULL,
  `name` VARCHAR(128) NOT NULL,
  `description` TEXT,
  `is_special` BOOLEAN DEFAULT FALSE,
  FOREIGN KEY (hospital_code) REFERENCES hospitals(code) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS `hospital_details` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `hospital_code` VARCHAR(32) NOT NULL UNIQUE,
  `introduction` TEXT,
  `established_date` DATE,
  `bed_count` INT,
  `annual_visit` INT,
  `contact_phone` VARCHAR(32),
  `emergency_phone` VARCHAR(32),
  `website` VARCHAR(255),
  `email` VARCHAR(128),
  `postal_code` VARCHAR(16),
  `latitude` DECIMAL(10, 8),
  `longitude` DECIMAL(11, 8),
  FOREIGN KEY (hospital_code) REFERENCES hospitals(code) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS `appointment_notices` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `hospital_code` VARCHAR(32) NOT NULL,
  `title` VARCHAR(255) NOT NULL,
  `content` TEXT NOT NULL,
  `publish_date` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `effective_date` DATETIME,
  `expiry_date` DATETIME,
  FOREIGN KEY (hospital_code) REFERENCES hospitals(code) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS `closure_notices` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `hospital_code` VARCHAR(32) NOT NULL,
  `department` VARCHAR(128),
  `doctor_name` VARCHAR(64),
  `closure_date` DATE NOT NULL,
  `closure_time` TIME NOT NULL,
  `reason` VARCHAR(255),
  `is_emergency` BOOLEAN DEFAULT FALSE,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (hospital_code) REFERENCES hospitals(code) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 插入一些示例数据
INSERT INTO `departments` (`hospital_code`, `name`, `description`, `is_special`) VALUES
  ('HOS10001', '心血管内科', '专门治疗心脏和血管相关疾病', TRUE),
  ('HOS10001', '神经内科', '治疗脑部和神经系统相关疾病', TRUE),
  ('HOS10001', '骨科', '治疗骨骼、关节和肌肉相关疾病', TRUE),
  ('HOS10001', '儿科', '专门为儿童提供医疗服务', FALSE),
  ('HOS10001', '急诊科', '提供24小时紧急医疗服务', FALSE);

INSERT INTO `hospital_details` (`hospital_code`, `introduction`, `established_date`, `bed_count`, `annual_visit`, `contact_phone`, `emergency_phone`, `website`, `email`, `postal_code`) VALUES
  ('HOS10001', '北京市第一人民医院是一所集医疗、教学、科研、预防、保健为一体的大型综合性三级甲等医院。医院始建于1950年，是北京市重点建设的医疗机构之一。', '1950-01-01', 1500, 2000000, '010-12345678', '010-87654321', 'http://www.bdfph.com', 'info@bdfph.com', '100000');

INSERT INTO `appointment_notices` (`hospital_code`, `title`, `content`, `effective_date`, `expiry_date`) VALUES
  ('HOS10001', '预约挂号新规定', '自2025年12月1日起，所有专家号源将提前14天开放预约，请患者合理安排就诊时间。', '2025-12-01 00:00:00', '2026-12-01 00:00:00');

INSERT INTO `closure_notices` (`hospital_code`, `department`, `doctor_name`, `closure_date`, `closure_time`, `reason`) VALUES
  ('HOS10001', '心血管内科', '张医生', '2025-12-25', '09:00:00', '医生学术会议');