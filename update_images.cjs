const fs = require('fs');

const filePaths = ['src/pages/Home.jsx', 'src/pages/Work.jsx'];

const imgMap = {
  // Home Project 1 (EduConnect)
  'AB6AXuCBtIKyi9B__d_gt5sxsRokRUldjyOgB3OPU0DnZmhmsjJ6U6l58UW5eHjCMKZMiHAZyyepIw8SOCTy5xrKTf-5CNwGuOrXkmTBKDXrzj0ttW923VrOyZE81KoukLBmkiOdIt9Ythqi4OMSD65z5grLSThtP_gDFDmTsujrQJqo_thYWNyIqDI9dkDys27T13ED4VQAr4OgjH-XLN4Uqve5V-DBWoGyFYC8cEFtAYcfzSXN_Mb42vqo6MBJgJz5AFm-n7rkKhwZCEXi': 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2000&auto=format&fit=crop',
  // Home Project 2 (HSTA)
  'AB6AXuC9-x_Gb2te9PQuo3jhX6dCz6EH5lSXiX_A8B4PWGUsYQ4zglYpLpEb3ie8MekKvAVNR-9Hb41lZLXsnjx18JU9FRCF3nTprfM2pzTadIlwf4x6OlNxzBIWlpjQpiD5iIz__-WBcAIy_LKlp9ALx69USV0aRgIc7ouJjzepVVY_ykKVat1sRKFka86SXaiiLkH7s7ksnsaptWa-KrITTQrzbSN7eMI4CP7fdgrNjSIpbLee6Dl4xKLz8bbG7JsuuLUzJIWcE8I6-G9b': 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2000&auto=format&fit=crop',
  // Home Project 3 (CareConnect)
  'AB6AXuBZ6_Ixx9tY5Dpk_ZFgZOmeSdp1m9DkTJl_RRbegxu3pXbO-u06AKFdUuBzILc3dgGaUePta93ZEbP9BawW86ocZYuBjZyQb9sY0Yjy7WESUkSXMd5sV4V9x9_dP_5fwBerimvJIZSir9lscL9G4EA_xGUuga_k7JAHWgg94C8zcg5l0j0FyCYu0dGtovUYfYWQtF2TCc8E502Ykm8WuGZmbd_cxZDQImLcvkWiCTSjPYl_UV408OA55lCsab_uRa8IXlO-XkggCJrf': 'https://images.unsplash.com/photo-1576091160550-2173ff9e5e3c?q=80&w=2000&auto=format&fit=crop',
  // Work Project 1 (EduConnect)
  'AB6AXuCQkWJvZLPtJID2dUCi_YYccpqf9AXoW1e58X9cTNpQs2-zwO8yZmhF9aHK0MuqDAm-slf5lF7xgBcsiO6tiSipoYzWEhC9o_Y-CI7zRbgHQgDopzojGVc8wffKQYVtQkGyZ5EkJgvs7jxxQEtdMjNJTRLu32itAZHeZcpJqFprlEd4o7ic2gpQaE6DsOkyxBpZkK9Elk3ECYSHmPVymwenuQ7r-2GGafyWDdG_B7RF7N81uwu9TNpamsCM4r-ep39FZwTh5KvowJyk': 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2000&auto=format&fit=crop',
  // Work Project 2 (HSTA)
  'AB6AXuAT02afDRDRecBt6NsOyiqaRM45k64sTOnHgxOHdQ7C_BReSPF483cbE59JQEvzN_LkzHlePbtDCbCoz2fr5atBMG6NpqIrPG0qDnJfDlnF2-HQNHTQm-HzrHtvuPnQlPKDtwNCZMAtVO_zymdRCJnrHsBlulnfh-8-9mIua0p_NvRQZ3dEG6GDRQkM2FUDu1143U519NhOgl659qrFG2uZZM1l1xMMTNnghYUWdL3AFwD4ZnfRvxmMoRluot6gny23ux5kNGdIGh1d': 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2000&auto=format&fit=crop',
  // Work Project 3 (CareConnect)
  'AB6AXuBOG13865sGC1KvYhe40nRLsOHEJz80XvMQjuTtfDBxZwKHdIXUg6m4PoOIiuDJWsLeGYy7y7klvD4_IX1ofJM53RvZp0zbaGvPtV-SKO1BasK30-M9VIWIVsVlbRvUsBANac9d2iCHkpP1eKfsNtdtFYyNVjDNmmho4C-g8XTvpRZtUKmYa0QB8iLggfsJYfl-uhqq2r616HD4uvjS-QenbgwNY7fOC-tuZ7rVbI-7SCFEnhsn8Cg_0Tiqfoev0m1SGG7Tw4ST3UZJ': 'https://images.unsplash.com/photo-1576091160550-2173ff9e5e3c?q=80&w=2000&auto=format&fit=crop',
  // Extra placeholders
  'AB6AXuBe0X4ID0rYre3ZMtY2q7p6KVD-Oe-ZNWMCR-HOQ_rFfo4A0TNiE-XQrUAVr1V3frtEJV2YAevVEEb-CY_3lCLmEkz8UqhNX-ZbueapYvrOPAjCfY3PJfmA6vTJ2Jeo_Kl-L65ONDcwUE6r49SayTId1L1O7VBnF-4X6cEfqS8orYSFnWAPr7MwbQPKbxwJ4-iXlpTN4u1Z6YU4Ku_Bza8d3QFc89fyGd364Bnh2vL_oruv2hxySiKHMGt24elH5z32l6Ns2GNpKQWh': 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2000&auto=format&fit=crop',
  'AB6AXuBtwpSK9kbl5iRztVFDnMRZTgwoTjrQEa8kTnM4Ck1QniS3z7mcBJqTweaRi2_dHD17iQj_FTIi5FRw9vVp8FR3TP_ukGxM3Uj1lrlDlGNGP-YSI1LAi7tsfbPlsLw1oFbXqS5-L3Ai-txFQ_YS_mBPHcQlNSBmxMZ537evnkX-0ArjRaU5_8X0MWQxYNLiRFInGORb5qkUQIZG5yNsRTa6PgO673TexTbMo5pI7CBPRgOmTN0ScRuiO9-TPtSt-jvvT0XHcxemT1JD': 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2000&auto=format&fit=crop',
  'AB6AXuAeQ1JX75g4_xVpbyD9lzTEu-a3b8PFwy00YQLVkGTHzdYTQDe-2uPdoWFjubaRlhUUGi-YNW9jMbXIppgDBUh0zrldf8Y5jc9IVM2CeMtidtCqFe2NVEU8n9oUInXvcLESejwxGOYcyqow8R8aiQA372l5YAxH9lE8_-13IRfBG6pD9qmpDJ_NtVMpIbx9ZOerUxeLDATF9IA_V1jZeouKry3mrHr6Yiu9cVn6oeb_-hu6uz08G57PVHLfycj5o5MAZ_D6f1idVx4j': 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2000&auto=format&fit=crop'
};

filePaths.forEach((filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  Object.keys(imgMap).forEach((id) => {
    // We match the long googleusercontent URL part
    content = content.replace(new RegExp(`https://lh3.googleusercontent.com/aida-public/${id}`, 'g'), imgMap[id]);
  });
  fs.writeFileSync(filePath, content);
});

console.log('Images updated successfully!');
