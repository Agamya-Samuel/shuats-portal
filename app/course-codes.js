import {
	Apple,
	Bolt,
	Bug,
	Building,
	ComputerIcon,
	Database,
	FileText,
	FlaskConical,
	Laptop,
	LaptopMinimal,
	Leaf,
	Microchip,
	Microscope,
	Milk,
	SatelliteDish,
	Sprout,
	Tractor,
	Trees,
	Users,
	Utensils,
	Dna,
	Cog,
	MonitorCheck,
	Shirt,
	Home,
	PawPrint,
	Droplet,
	Construction,
	Snowflake,
	Flame,
	Bot,
} from 'lucide-react';

const coursesList = [
	{
		name: 'BSc Ag',
		icon: FileText,
		description: 'Bachelor of Science in Agriculture',
		materials: [
			'Plant Pathology',
			'Animal Husbandry',
			'Agricultural Economics',
			'Horticulture',
		],
	},
	{
		name: 'BSc Biotechnology',
		icon: Microscope,
		description: 'Bachelor of Science in Biotechnology',
		materials: [
			'Genetics',
			'Molecular Biology',
			'Biochemistry',
			'Microbiology',
		],
	},
	{
		name: 'BSc Community Science',
		icon: Users,
		description: 'Bachelor of Science in Community Science',
		materials: [
			'Human Development',
			'Family Studies',
			'Community Nutrition',
			'Extension Education',
		],
	},
	{
		name: 'BSc Food Nutrition and Dietetics',
		icon: Utensils,
		description: 'Bachelor of Science in Food Nutrition and Dietetics',
		materials: [
			'Human Nutrition',
			'Diet Therapy',
			'Food Science',
			'Public Health Nutrition',
		],
	},
	{
		name: 'BSc Food Technology',
		icon: Apple,
		description: 'Bachelor of Science in Food Technology',
		materials: [
			'Food Chemistry',
			'Food Microbiology',
			'Food Processing',
			'Food Quality Control',
		],
	},
	{
		name: 'BSc Forestry',
		icon: Trees,
		description: 'Bachelor of Science in Forestry',
		materials: [
			'Forest Biology',
			'Silviculture',
			'Agroforestry',
			'Forest Management',
		],
	},
	{
		name: 'BSc Horticulture',
		icon: Sprout,
		description: 'Bachelor of Science in Horticulture',
		materials: [
			'Plant Propagation',
			'Pomology',
			'Olericulture',
			'Floriculture',
		],
	},
	{
		name: 'BSc Microbiology',
		icon: Bug,
		description: 'Bachelor of Science in Microbiology',
		materials: [
			'Microbial Genetics',
			'Immunology',
			'Virology',
			'Industrial Microbiology',
		],
	},
	{
		name: 'BSc Computer Science',
		icon: LaptopMinimal,
		description: 'Bachelor of Science in Computer Science',
		materials: [
			'Programming',
			'Data Structures',
			'Algorithms',
			'Operating Systems',
		],
	},
	{
		name: 'BTech Agricultural Engineering',
		icon: Tractor,
		description: 'Bachelor of Technology in Agricultural Engineering',
		materials: [
			'Soil Science',
			'Agricultural Machinery',
			'Irrigation Systems',
			'Crop Management',
		],
	},
	{
		name: 'BTech Dairy Technology',
		icon: Milk,
		description: 'Bachelor of Technology in Dairy Technology',
		materials: [
			'Dairy Chemistry',
			'Dairy Microbiology',
			'Dairy Engineering',
			'Dairy Processing',
		],
	},
	{
		name: 'BTech Food Technology',
		icon: Apple,
		description: 'Bachelor of Technology in Food Technology',
		materials: [
			'Food Chemistry',
			'Food Microbiology',
			'Food Processing',
			'Food Quality Control',
		],
	},
	{
		name: 'BTech Biochemical Engineering',
		icon: FlaskConical,
		description: 'Bachelor of Technology in Biochemical Engineering',
		materials: [
			'Bioprocess Engineering',
			'Biochemical Reaction Engineering',
			'Downstream Processing',
			'Enzyme Technology',
		],
	},
	{
		name: 'BTech Bioinformatics',
		icon: Database,
		description: 'Bachelor of Technology in Bioinformatics',
		materials: [
			'Computational Biology',
			'Genomics',
			'Proteomics',
			'Bioinformatics Algorithms',
		],
	},
	{
		name: 'BTech Civil Engineering',
		icon: Building,
		description: 'Bachelor of Technology in Civil Engineering',
		materials: [
			'Structural Analysis',
			'Construction Materials',
			'Geotechnical Engineering',
			'Transportation Engineering',
		],
	},
	{
		name: 'BTech Computer Science and Engineering',
		icon: Laptop,
		description:
			'Bachelor of Technology in Computer Science and Engineering',
		materials: [
			'Data Structures',
			'Algorithms',
			'Database Management',
			'Web Development',
		],
	},
	{
		name: 'BTech Electrical Engineering',
		icon: Bolt,
		description: 'Bachelor of Technology in Electrical Engineering',
		materials: [
			'Circuit Analysis',
			'Electromagnetics',
			'Power Systems',
			'Control Systems',
		],
	},
	{
		name: 'BTech Electronics and Communication Engineering',
		icon: SatelliteDish,
		description:
			'Bachelor of Technology in Electronics and Communication Engineering',
		materials: [
			'Analog Electronics',
			'Digital Electronics',
			'Communication Systems',
			'Signal Processing',
		],
	},
	{
		name: 'BTech Electronics and Computer Engineering',
		icon: Microchip,
		description:
			'Bachelor of Technology in Electronics and Computer Engineering',
		materials: [
			'Microprocessors',
			'Embedded Systems',
			'Computer Networks',
			'VLSI Design',
		],
	},
	{
		name: 'BTech Environmental Engineering',
		icon: Leaf,
		description: 'Bachelor of Technology in Environmental Engineering',
		materials: [
			'Environmental Chemistry',
			'Droplet Treatment',
			'Air Pollution Control',
			'Waste Management',
		],
	},
	{
		name: 'BTech Biotechnology',
		icon: Dna,
		description: 'Bachelor of Technology in Biotechnology',
		materials: [
			'Genetic Engineering',
			'Cell Biology',
			'Bioprocess Engineering',
			'Bioinformatics',
		],
	},
	{
		name: 'BTech Mechanical Engineering',
		icon: Cog,
		description: 'Bachelor of Technology in Mechanical Engineering',
		materials: [
			'Thermodynamics',
			'Fluid Mechanics',
			'Machine Design',
			'Manufacturing Processes',
		],
	},
	{
		name: 'Bachelor of Computer Application',
		icon: MonitorCheck,
		description: 'Bachelor of Computer Application',
		materials: [
			'Programming',
			'Database Management',
			'Software Engineering',
			'Computer Networks',
		],
	},
	{
		name: 'IDD Dairy Technology',
		icon: Milk,
		description: 'Integrated Dual Degree in Dairy Technology',
		materials: [
			'Dairy Chemistry',
			'Dairy Microbiology',
			'Dairy Engineering',
			'Dairy Processing',
		],
	},
	{
		name: 'MSc Agri Biochemistry',
		icon: FlaskConical,
		description: 'Master of Science in Agricultural Biochemistry',
		materials: [
			'Plant Biochemistry',
			'Enzyme Technology',
			'Metabolic Pathways',
			'Molecular Biology',
		],
	},
	{
		name: 'MSc Agri Bioinformatics',
		icon: Database,
		description: 'Master of Science in Agricultural Bioinformatics',
		materials: [
			'Computational Biology',
			'Genomics',
			'Proteomics',
			'Bioinformatics Algorithms',
		],
	},
	{
		name: 'MSc Agri Microbiology',
		icon: Bug,
		description: 'Master of Science in Agricultural Microbiology',
		materials: [
			'Soil Microbiology',
			'Plant-Microbe Interactions',
			'Microbial Genetics',
			'Biocontrol Agents',
		],
	},
	{
		name: 'MSc Agri Molecular Biology and Biotechnology',
		icon: Dna,
		description:
			'Master of Science in Agricultural Molecular Biology and Biotechnology',
		materials: [
			'Genetic Engineering',
			'Plant Biotechnology',
			'Molecular Markers',
			'Genomics',
		],
	},
	{
		name: 'MSc Agri Seed Science and Technology',
		icon: Sprout,
		description:
			'Master of Science in Agricultural Seed Science and Technology',
		materials: [
			'Seed Physiology',
			'Seed Pathology',
			'Seed Production',
			'Seed Quality Control',
		],
	},
	{
		name: 'MSc Agri Soil Science',
		icon: Leaf,
		description: 'Master of Science in Agricultural Soil Science',
		materials: [
			'Soil Chemistry',
			'Soil Fertility',
			'Soil Microbiology',
			'Soil Conservation',
		],
	},
	{
		name: 'MSc Community Science Apparel and Textile Science',
		icon: Shirt,
		description:
			'Master of Science in Community Science Apparel and Textile Science',
		materials: [
			'Textile Chemistry',
			'Fabric Science',
			'Apparel Design',
			'Textile Testing',
		],
	},
	{
		name: 'MSc Community Science Extension Education and Communication Management',
		icon: Users,
		description:
			'Master of Science in Community Science Extension Education and Communication Management',
		materials: [
			'Extension Methods',
			'Communication Strategies',
			'Program Planning',
			'Community Development',
		],
	},
	{
		name: 'MSc Community Science Food and Nutrition',
		icon: Utensils,
		description:
			'Master of Science in Community Science Food and Nutrition',
		materials: [
			'Advanced Nutrition',
			'Clinical Nutrition',
			'Public Health Nutrition',
			'Food Safety',
		],
	},
	{
		name: 'MSc Community Science Human Development and Family Studies',
		icon: Users,
		description:
			'Master of Science in Community Science Human Development and Family Studies',
		materials: [
			'Child Development',
			'Family Dynamics',
			'Gerontology',
			'Counseling',
		],
	},
	{
		name: 'MSc Community Science Resource Management and Consumer Science',
		icon: Home,
		description:
			'Master of Science in Community Science Resource Management and Consumer Science',
		materials: [
			'Resource Management',
			'Consumer Behavior',
			'Housing and Interiors',
			'Ergonomics',
		],
	},
	{
		name: 'MSc Dairy Technology',
		icon: Milk,
		description: 'Master of Science in Dairy Technology',
		materials: [
			'Dairy Chemistry',
			'Dairy Microbiology',
			'Dairy Engineering',
			'Dairy Processing',
		],
	},
	{
		name: 'MSc Forestry Forest Biology and Trees Improvement',
		icon: Trees,
		description:
			'Master of Science in Forestry Forest Biology and Trees Improvement',
		materials: [
			'Forest Genetics',
			'Trees Breeding',
			'Forest Ecology',
			'Silviculture',
		],
	},
	{
		name: 'MSc Forestry Silviculture and Agroforestry',
		icon: Trees,
		description:
			'Master of Science in Forestry Silviculture and Agroforestry',
		materials: [
			'Silvicultural Systems',
			'Agroforestry Practices',
			'Forest Management',
			'Trees Physiology',
		],
	},
	{
		name: 'MSc Forestry Forest Products and Utilization',
		icon: Trees,
		description:
			'Master of Science in Forestry Forest Products and Utilization',
		materials: [
			'Wood Science',
			'Non-Timber Forest Products',
			'Forest Harvesting',
			'Forest Products Marketing',
		],
	},
	{
		name: 'MSc Forestry Forest Resource Management',
		icon: Trees,
		description: 'Master of Science in Forestry Forest Resource Management',
		materials: [
			'Forest Inventory',
			'Forest Economics',
			'Forest Policy',
			'Forest Conservation',
		],
	},
	{
		name: 'MSc Horticulture Floriculture and Landscaping',
		icon: Sprout,
		description:
			'Master of Science in Horticulture Floriculture and Landscaping',
		materials: [
			'Floral Design',
			'Landscape Architecture',
			'Ornamental Horticulture',
			'Plant Propagation',
		],
	},
	{
		name: 'MSc Horticulture Plantation, Spices, Medicinal and Aromatic Crops',
		icon: Sprout,
		description:
			'Master of Science in Horticulture Plantation, Spices, Medicinal and Aromatic Crops',
		materials: [
			'Plantation Crops',
			'Spices Cultivation',
			'Medicinal Plants',
			'Aromatic Plants',
		],
	},
	{
		name: 'MSc Horticulture Post Harvest Management',
		icon: Sprout,
		description:
			'Master of Science in Horticulture Post Harvest Management',
		materials: [
			'Post Harvest Physiology',
			'Storage Techniques',
			'Processing Technology',
			'Quality Control',
		],
	},
	{
		name: 'MSc Ag Animal Nutrition',
		icon: PawPrint,
		description: 'Master of Science in Agricultural Animal Nutrition',
		materials: [
			'Animal Feed',
			'Nutritional Requirements',
			'Feed Formulation',
			'Animal Health',
		],
	},
	{
		name: 'MSc Ag Livestock Production and Management',
		icon: PawPrint,
		description:
			'Master of Science in Agricultural Livestock Production and Management',
		materials: [
			'Animal Breeding',
			'Livestock Management',
			'Animal Health',
			'Dairy Production',
		],
	},
	{
		name: 'MSc Biochemistry',
		icon: FlaskConical,
		description: 'Master of Science in Biochemistry',
		materials: [
			'Metabolism',
			'Enzyme Kinetics',
			'Molecular Biology',
			'Biochemical Techniques',
		],
	},
	{
		name: 'MSc Bioinformatics',
		icon: Database,
		description: 'Master of Science in Bioinformatics',
		materials: [
			'Computational Biology',
			'Genomics',
			'Proteomics',
			'Bioinformatics Algorithms',
		],
	},
	{
		name: 'MSc Biotechnology',
		icon: Dna,
		description: 'Master of Science in Biotechnology',
		materials: [
			'Genetic Engineering',
			'Cell Biology',
			'Bioprocess Engineering',
			'Bioinformatics',
		],
	},
	{
		name: 'MSc Dairy Chemistry',
		icon: FlaskConical,
		description: 'Master of Science in Dairy Chemistry',
		materials: [
			'Milk Chemistry',
			'Dairy Products',
			'Food Chemistry',
			'Analytical Techniques',
		],
	},
	{
		name: 'MSc Dairy Microbiology',
		icon: Bug,
		description: 'Master of Science in Dairy Microbiology',
		materials: [
			'Microbial Genetics',
			'Fermentation Technology',
			'Dairy Microbiology',
			'Food Safety',
		],
	},
	{
		name: 'MSc Environmental Science',
		icon: Leaf,
		description: 'Master of Science in Environmental Science',
		materials: [
			'Environmental Chemistry',
			'Ecology',
			'Pollution Control',
			'Environmental Management',
		],
	},
	{
		name: 'MSc Food Science and Technology',
		icon: Apple,
		description: 'Master of Science in Food Science and Technology',
		materials: [
			'Food Chemistry',
			'Food Microbiology',
			'Food Processing',
			'Food Quality Control',
		],
	},
	{
		name: 'MSc Forestry Wildlife Sciences',
		icon: PawPrint,
		description: 'Master of Science in Forestry Wildlife Sciences',
		materials: [
			'Wildlife Biology',
			'Conservation Biology',
			'Habitat Management',
			'Wildlife Policy',
		],
	},
	{
		name: 'MSc Microbiology',
		icon: Bug,
		description: 'Master of Science in Microbiology',
		materials: [
			'Microbial Genetics',
			'Immunology',
			'Virology',
			'Industrial Microbiology',
		],
	},
	{
		name: 'MSc Remote Sensing and Geographical Information System',
		icon: Map,
		description:
			'Master of Science in Remote Sensing and Geographical Information System',
		materials: [
			'Remote Sensing',
			'GIS Applications',
			'Spatial Analysis',
			'Cartography',
		],
	},
	{
		name: 'MTech Food Process Engineering',
		icon: Apple,
		description: 'Master of Technology in Food Process Engineering',
		materials: [
			'Food Processing',
			'Food Engineering',
			'Food Quality Control',
			'Food Safety',
		],
	},
	{
		name: 'MTech Dairy Technology',
		icon: Milk,
		description: 'Master of Technology in Dairy Technology',
		materials: [
			'Dairy Chemistry',
			'Dairy Microbiology',
			'Dairy Engineering',
			'Dairy Processing',
		],
	},
	{
		name: 'MTech Food Technology Food Laws and Policies',
		icon: Apple,
		description:
			'Master of Technology in Food Technology Food Laws and Policies',
		materials: [
			'Food Laws',
			'Food Policies',
			'Food Safety',
			'Quality Control',
		],
	},
	{
		name: 'MTech Food Technology Food Supply Chain Management',
		icon: Apple,
		description:
			'Master of Technology in Food Technology Food Supply Chain Management',
		materials: [
			'Supply Chain Management',
			'Logistics',
			'Food Distribution',
			'Quality Control',
		],
	},
	{
		name: 'MTech Agricultural Droplet Management',
		icon: Droplet,
		description: 'Master of Technology in Agricultural Droplet Management',
		materials: [
			'Irrigation Systems',
			'Droplet Conservation',
			'Hydrology',
			'Droplet Quality',
		],
	},
	{
		name: 'MTech Bioinformatics',
		icon: Database,
		description: 'Master of Technology in Bioinformatics',
		materials: [
			'Computational Biology',
			'Genomics',
			'Proteomics',
			'Bioinformatics Algorithms',
		],
	},
	{
		name: 'MTech Biotechnology',
		icon: Dna,
		description: 'Master of Technology in Biotechnology',
		materials: [
			'Genetic Engineering',
			'Cell Biology',
			'Bioprocess Engineering',
			'Bioinformatics',
		],
	},
	{
		name: 'MTech Civil Engineering Construction Engineering and Management',
		icon: Building,
		description:
			'Master of Technology in Civil Engineering Construction Engineering and Management',
		materials: [
			'Construction Planning',
			'Project Management',
			'Construction Materials',
			'Structural Analysis',
		],
	},
	{
		name: 'MTech Civil Engineering Structural Engineering',
		icon: Building,
		description:
			'Master of Technology in Civil Engineering Structural Engineering',
		materials: [
			'Structural Analysis',
			'Concrete Technology',
			'Steel Structures',
			'Earthquake Engineering',
		],
	},
	{
		name: 'MTech Civil Engineering Transportation Engineering',
		icon: Construction,
		description:
			'Master of Technology in Civil Engineering Transportation Engineering',
		materials: [
			'Traffic Engineering',
			'Highway Design',
			'Pavement Materials',
			'Transportation Planning',
		],
	},
	{
		name: 'MTech Computer Science and Engineering',
		icon: Laptop,
		description: 'Master of Technology in Computer Science and Engineering',
		materials: [
			'Advanced Algorithms',
			'Machine Learning',
			'Distributed Systems',
			'Cyber Security',
		],
	},
	{
		name: 'MTech Computer Science and Engineering Data Science',
		icon: Database,
		description:
			'Master of Technology in Computer Science and Engineering Data Science',
		materials: [
			'Data Mining',
			'Big Data Analytics',
			'Machine Learning',
			'Data Visualization',
		],
	},
	{
		name: 'MTech Dairy Chemistry',
		icon: FlaskConical,
		description: 'Master of Technology in Dairy Chemistry',
		materials: [
			'Milk Chemistry',
			'Dairy Products',
			'Food Chemistry',
			'Analytical Techniques',
		],
	},
	{
		name: 'MTech Dairy Engineering',
		icon: Cog,
		description: 'Master of Technology in Dairy Engineering',
		materials: [
			'Dairy Equipment',
			'Process Engineering',
			'Dairy Plant Design',
			'Refrigeration',
		],
	},
	{
		name: 'MTech Dairy Microbiology',
		icon: Bug,
		description: 'Master of Technology in Dairy Microbiology',
		materials: [
			'Microbial Genetics',
			'Fermentation Technology',
			'Dairy Microbiology',
			'Food Safety',
		],
	},
	{
		name: 'MTech Electrical Engineering Control and Instrumentation',
		icon: Bolt,
		description:
			'Master of Technology in Electrical Engineering Control and Instrumentation',
		materials: [
			'Control Systems',
			'Instrumentation',
			'Signal Processing',
			'Automation',
		],
	},
	{
		name: 'MTech Electrical Engineering Power Electronics',
		icon: Bolt,
		description:
			'Master of Technology in Electrical Engineering Power Electronics',
		materials: [
			'Power Converters',
			'Electric Drives',
			'Power Systems',
			'Renewable Energy',
		],
	},
	{
		name: 'MTech Electrical Engineering Power System',
		icon: Bolt,
		description:
			'Master of Technology in Electrical Engineering Power System',
		materials: [
			'Power Generation',
			'Transmission Systems',
			'Distribution Systems',
			'Smart Grids',
		],
	},
	{
		name: 'MTech Electronics and Communication Engineering Communication System Engineering',
		icon: SatelliteDish,
		description:
			'Master of Technology in Electronics and Communication Engineering Communication System Engineering',
		materials: [
			'Digital Communication',
			'Wireless Networks',
			'Signal Processing',
			'Antenna Design',
		],
	},
	{
		name: 'MTech Energy Management',
		icon: Leaf,
		description: 'Master of Technology in Energy Management',
		materials: [
			'Energy Auditing',
			'Renewable Energy',
			'Energy Efficiency',
			'Sustainable Energy',
		],
	},
	{
		name: 'MTech Environmental Engineering',
		icon: Leaf,
		description: 'Master of Technology in Environmental Engineering',
		materials: [
			'Environmental Impact Assessment',
			'Droplet Treatment',
			'Air Pollution Control',
			'Waste Management',
		],
	},
	{
		name: 'MTech Farm Machinery and Power Engineering',
		icon: Tractor,
		description:
			'Master of Technology in Farm Machinery and Power Engineering',
		materials: [
			'Farm Machinery Design',
			'Power Systems',
			'Irrigation Equipment',
			'Agricultural Mechanization',
		],
	},
	{
		name: 'MTech Food Processing Technology',
		icon: Apple,
		description: 'Master of Technology in Food Processing Technology',
		materials: [
			'Food Processing',
			'Food Engineering',
			'Food Quality Control',
			'Food Safety',
		],
	},
	{
		name: 'MTech Food Safety and Quality',
		icon: Apple,
		description: 'Master of Technology in Food Safety and Quality',
		materials: [
			'Food Safety',
			'Quality Control',
			'Food Laws',
			'Food Policies',
		],
	},
	{
		name: 'MTech Irrigation and Drainage Engineering',
		icon: Droplet,
		description:
			'Master of Technology in Irrigation and Drainage Engineering',
		materials: [
			'Irrigation Systems',
			'Drainage Systems',
			'Droplet Management',
			'Soil Conservation',
		],
	},
	{
		name: 'MTech Mechanical Engineering CAD CAM',
		icon: Cog,
		description: 'Master of Technology in Mechanical Engineering CAD CAM',
		materials: [
			'Computer-Aided Design',
			'Computer-Aided Manufacturing',
			'Botics',
			'Automation',
		],
	},
	{
		name: 'MTech Mechanical Engineering Industrial Engineering and Management',
		icon: Cog,
		description:
			'Master of Technology in Mechanical Engineering Industrial Engineering and Management',
		materials: [
			'Industrial Management',
			'Operations Research',
			'Production Planning',
			'Quality Control',
		],
	},
	{
		name: 'MTech Mechanical Engineering Machine Design',
		icon: Cog,
		description:
			'Master of Technology in Mechanical Engineering Machine Design',
		materials: [
			'Machine Elements',
			'Mechanical Vibrations',
			'Finite Element Analysis',
			'Design Optimization',
		],
	},
	{
		name: 'MTech Mechanical Engineering Production and Industrial Engineering',
		icon: Cog,
		description:
			'Master of Technology in Mechanical Engineering Production and Industrial Engineering',
		materials: [
			'Manufacturing Processes',
			'Industrial Automation',
			'Production Planning',
			'Quality Control',
		],
	},
	{
		name: 'MTech Mechanical Engineering Refrigeration and Air Conditioning',
		icon: Snowflake,
		description:
			'Master of Technology in Mechanical Engineering Refrigeration and Air Conditioning',
		materials: [
			'Thermodynamics',
			'Heat Transfer',
			'Refrigeration Systems',
			'Air Conditioning Systems',
		],
	},
	{
		name: 'MTech Mechanical Engineering Thermal Engineering',
		icon: Flame,
		description:
			'Master of Technology in Mechanical Engineering Thermal Engineering',
		materials: [
			'Thermodynamics',
			'Heat Transfer',
			'Fluid Mechanics',
			'Energy Systems',
		],
	},
	{
		name: 'MTech Mechatronics',
		icon: Bot,
		description: 'Master of Technology in Mechatronics',
		materials: [
			'Botics',
			'Automation',
			'Control Systems',
			'Embedded Systems',
		],
	},
	{
		name: 'MTech Processing and Food Engineering',
		icon: Apple,
		description: 'Master of Technology in Processing and Food Engineering',
		materials: [
			'Food Processing',
			'Food Engineering',
			'Food Quality Control',
			'Food Safety',
		],
	},
	{
		name: 'MTech Renewable Energy Engineering',
		icon: Leaf,
		description: 'Master of Technology in Renewable Energy Engineering',
		materials: [
			'Renewable Energy',
			'Energy Efficiency',
			'Sustainable Energy',
			'Energy Management',
		],
	},
	{
		name: 'MTech Soil and Droplet Conservation Engineering',
		icon: Droplet,
		description:
			'Master of Technology in Soil and Droplet Conservation Engineering',
		materials: [
			'Soil Conservation',
			'Droplet Management',
			'Irrigation Systems',
			'Drainage Systems',
		],
	},
	{
		name: 'MTech Droplet Resource Engineering',
		icon: Droplet,
		description: 'Master of Technology in Droplet Resource Engineering',
		materials: [
			'Hydrology',
			'Droplet Management',
			'Irrigation Systems',
			'Drainage Systems',
		],
	},
	{
		name: 'Master of Computer Application',
		icon: ComputerIcon,
		description: 'Master of Computer Application',
		materials: [
			'Advanced Programming',
			'Database Management',
			'Software Engineering',
			'Computer Networks',
		],
	},
	{
		name: 'MBA Dairy Business Management',
		icon: Milk,
		description:
			'Master of Business Administration in Dairy Business Management',
		materials: [
			'Dairy Economics',
			'Supply Chain Management',
			'Marketing Management',
			'Financial Management',
		],
	},
	{
		name: 'One Year Certificate Course in Plant Tissue Culture Technology',
		icon: Leaf,
		description:
			'One Year Certificate Course in Plant Tissue Culture Technology',
		materials: [
			'Plant Tissue Culture',
			'Micropropagation',
			'Genetic Engineering',
			'Biotechnology',
		],
	},
];

export default coursesList;
