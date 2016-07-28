var searchIndex = {};
searchIndex["gimli"] = {"doc":"A lazy, zero-copy parser for the DWARF debugging information format.","items":[[3,"DwChildren","gimli","",null,null],[12,"0","","",0,null],[3,"DwTag","","",null,null],[12,"0","","",1,null],[3,"DwAt","","",null,null],[12,"0","","",2,null],[3,"DwForm","","",null,null],[12,"0","","",3,null],[3,"DebugStrOffset","","An offset into the `.debug_str` section.",null,null],[12,"0","","",4,null],[3,"DebugLineOffset","","An offset into the `.debug_line` section.",null,null],[12,"0","","",5,null],[3,"DebugLocOffset","","An offset into the `.debug_loc` section.",null,null],[12,"0","","",6,null],[3,"DebugMacinfoOffset","","An offset into the `.debug_macinfo` section.",null,null],[12,"0","","",7,null],[3,"UnitOffset","","An offset into the current compilation or type unit.",null,null],[12,"0","","",8,null],[3,"DebugInfo","","The `DebugInfo` struct represents the DWARF debugging information found in\nthe `.debug_info` section.",null,null],[3,"DebugInfoOffset","","An offset into the `.debug_info` section.",null,null],[12,"0","","",9,null],[3,"UnitHeadersIter","","An iterator over the compilation- and partial-units of a section.",null,null],[3,"UnitHeader","","The header of a compilation unit&#39;s debugging information.",null,null],[3,"DebugTypes","","The `DebugTypes` struct represents the DWARF type information\nfound in the `.debug_types` section.",null,null],[3,"DebugTypesOffset","","An offset into the `.debug_types` section.",null,null],[12,"0","","",10,null],[3,"TypeUnitHeadersIter","","An iterator over the type-units of this `.debug_types` section.",null,null],[3,"TypeUnitHeader","","The header of a type unit&#39;s debugging information.",null,null],[3,"EntriesCursor","","A cursor into the Debugging Information Entries tree for a compilation unit.",null,null],[3,"DebuggingInformationEntry","","A Debugging Information Entry (DIE).",null,null],[3,"AttrsIter","","An iterator over a particular entry&#39;s attributes.",null,null],[3,"Attribute","","An attribute in a `DebuggingInformationEntry`, consisting of a name and\nassociated value.",null,null],[3,"DebugAbbrev","","The `DebugAbbrev` struct represents the abbreviations describing\n`DebuggingInformationEntry`s&#39; attribute names and forms found in the\n`.debug_abbrev` section.",null,null],[3,"DebugAbbrevOffset","","An offset into the `.debug_abbrev` section.",null,null],[12,"0","","",11,null],[3,"Abbreviations","","A set of type abbreviations.",null,null],[3,"Abbreviation","","An abbreviation describes the shape of a `DebuggingInformationEntry`&#39;s type:\nits code, tag type, whether it has children, and its set of attributes.",null,null],[3,"AttributeSpecification","","The description of an attribute in an abbreviated type. It is a pair of name\nand form.",null,null],[4,"LittleEndian","","Little endian byte order.",null,null],[4,"BigEndian","","Big endian byte order.",null,null],[4,"Error","","An error that occurred when parsing.",null,null],[13,"BadUnsignedLeb128","","An error parsing an unsigned LEB128 value.",12,null],[13,"BadSignedLeb128","","An error parsing a signed LEB128 value.",12,null],[13,"AbbreviationTagZero","","An abbreviation declared that its tag is zero, but zero is reserved for\nnull records.",12,null],[13,"AttributeFormZero","","An attribute specification declared that its form is zero, but zero is\nreserved for null records.",12,null],[13,"BadHasChildren","","The abbreviation&#39;s has-children byte was not one of\n`DW_CHILDREN_{yes,no}`.",12,null],[13,"UnknownForm","","Found an unknown `DW_FORM_*` type.",12,null],[13,"ExpectedZero","","Expected a zero, found something else.",12,null],[13,"DuplicateAbbreviationCode","","Found an abbreviation code that has already been used.",12,null],[13,"UnknownReservedLength","","Found an unknown reserved length value.",12,null],[13,"UnknownVersion","","Found an unknown DWARF version.",12,null],[13,"UnitHeaderLengthTooShort","","The unit header&#39;s claimed length is too short to even hold the header\nitself.",12,null],[13,"UnknownAbbreviation","","Found a record with an unknown abbreviation code.",12,null],[13,"UnexpectedEof","","Hit the end of input before it was expected.",12,null],[4,"Format","","Whether the format of a compilation unit is 32- or 64-bit.",null,null],[13,"Dwarf64","","64-bit DWARF",13,null],[13,"Dwarf32","","32-bit DWARF",13,null],[4,"AttributeValue","","The value of an attribute in a `DebuggingInformationEntry`.",null,null],[13,"Addr","","A slice that is UnitHeaderHeader::address_size bytes long.",14,null],[13,"Block","","A slice of an arbitrary number of bytes.",14,null],[13,"Data","","A one, two, four, or eight byte constant data value. How to interpret\nthe bytes depends on context.",14,null],[13,"Sdata","","A signed integer constant.",14,null],[13,"Udata","","An unsigned integer constant.",14,null],[13,"Exprloc","","&quot;The information bytes contain a DWARF expression (see Section 2.5) or\nlocation description (see Section 2.6).&quot;",14,null],[13,"Flag","","A boolean typically used to describe the presence or absence of another\nattribute.",14,null],[13,"SecOffset","","An offset into another section. Which section this is an offset into\ndepends on context.",14,null],[13,"UnitRef","","An offset into the current compilation unit.",14,null],[13,"DebugInfoRef","","An offset into the current `.debug_info` section, but possibly a\ndifferent compilation unit from the current one.",14,null],[13,"DebugTypesRef","","An offset into the `.debug_types` section.",14,null],[13,"DebugStrRef","","An offset into the `.debug_str` section.",14,null],[13,"String","","A null terminated C string, including the final null byte. Not\nguaranteed to be UTF-8 or anything like that.",14,null],[11,"eq","","",0,null],[11,"ne","","",0,null],[11,"clone","","",0,null],[11,"fmt","","",0,null],[11,"fmt","","",0,null],[11,"eq","","",1,null],[11,"ne","","",1,null],[11,"clone","","",1,null],[11,"fmt","","",1,null],[11,"fmt","","",1,null],[11,"eq","","",2,null],[11,"ne","","",2,null],[11,"clone","","",2,null],[11,"fmt","","",2,null],[11,"fmt","","",2,null],[11,"eq","","",3,null],[11,"ne","","",3,null],[11,"clone","","",3,null],[11,"fmt","","",3,null],[11,"fmt","","",3,null],[11,"eq","","",15,null],[11,"clone","","",15,null],[11,"fmt","","",15,null],[11,"read_u16","","",15,null],[11,"read_u32","","",15,null],[11,"read_u64","","",15,null],[11,"read_uint","","",15,null],[11,"write_u16","","",15,null],[11,"write_u32","","",15,null],[11,"write_u64","","",15,null],[11,"write_uint","","",15,null],[11,"eq","","",16,null],[11,"clone","","",16,null],[11,"fmt","","",16,null],[11,"read_u16","","",16,null],[11,"read_u32","","",16,null],[11,"read_u64","","",16,null],[11,"read_uint","","",16,null],[11,"write_u16","","",16,null],[11,"write_u32","","",16,null],[11,"write_u64","","",16,null],[11,"write_uint","","",16,null],[11,"eq","","",12,null],[11,"clone","","",12,null],[11,"fmt","","",12,null],[11,"fmt","","",12,null],[11,"description","","",12,null],[11,"eq","","",10,null],[11,"ne","","",10,null],[11,"clone","","",10,null],[11,"fmt","","",10,null],[11,"eq","","",4,null],[11,"ne","","",4,null],[11,"clone","","",4,null],[11,"fmt","","",4,null],[11,"eq","","",9,null],[11,"ne","","",9,null],[11,"clone","","",9,null],[11,"fmt","","",9,null],[11,"eq","","",5,null],[11,"ne","","",5,null],[11,"clone","","",5,null],[11,"fmt","","",5,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"clone","","",6,null],[11,"fmt","","",6,null],[11,"eq","","",7,null],[11,"ne","","",7,null],[11,"clone","","",7,null],[11,"fmt","","",7,null],[11,"partial_cmp","","",8,null],[11,"lt","","",8,null],[11,"le","","",8,null],[11,"gt","","",8,null],[11,"ge","","",8,null],[11,"cmp","","",8,null],[11,"eq","","",8,null],[11,"ne","","",8,null],[11,"clone","","",8,null],[11,"fmt","","",8,null],[11,"clone","","",17,null],[11,"fmt","","",17,null],[11,"new","","Construct a new `DebugInfo` instance from the data in the `.debug_info`\nsection.",17,null],[11,"units","","Iterate the compilation- and partial-units in this\n`.debug_info` section.",17,null],[11,"next","","",18,null],[11,"eq","","",13,null],[11,"clone","","",13,null],[11,"fmt","","",13,null],[11,"eq","","",19,null],[11,"ne","","",19,null],[11,"clone","","",19,null],[11,"fmt","","",19,null],[11,"new","","Construct a new `UnitHeader`.",19,null],[11,"size_of_unit_length","","Return the serialized size of the `unit_length` attribute for the given\nDWARF format.",19,{"inputs":[{"name":"format"}],"output":{"name":"usize"}}],[11,"size_of_header","","Return the serialized size of the compilation unit header for the given\nDWARF format.",19,{"inputs":[{"name":"format"}],"output":{"name":"usize"}}],[11,"unit_length","","Get the length of the debugging info for this compilation unit, not\nincluding the byte length of the encoded length itself.",19,null],[11,"length_including_self","","Get the length of the debugging info for this compilation unit,\nuncluding the byte length of the encoded length itself.",19,null],[11,"version","","Get the DWARF version of the debugging info for this compilation unit.",19,null],[11,"debug_abbrev_offset","","The offset into the `.debug_abbrev` section for this compilation unit&#39;s\ndebugging information entries&#39; abbreviations.",19,null],[11,"address_size","","The size of addresses (in bytes) in this compilation unit.",19,null],[11,"format","","Whether this compilation unit is encoded in 64- or 32-bit DWARF.",19,null],[11,"range","","Get the underlying bytes for the supplied range.",19,null],[11,"range_from","","Get the underlying bytes for the supplied range.",19,null],[11,"range_to","","Get the underlying bytes for the supplied range.",19,null],[11,"entries","","Navigate this compilation unit&#39;s `DebuggingInformationEntry`s.",19,null],[11,"abbreviations","","Parse this compilation unit&#39;s abbreviations.",19,null],[11,"fmt","","",20,null],[11,"clone","","",20,null],[11,"code","","Get this entry&#39;s code.",20,null],[11,"tag","","Get this entry&#39;s `DW_TAG_whatever` tag.",20,null],[11,"attrs","","Iterate over this entry&#39;s set of attributes.",20,null],[11,"attr_value","","Find the first attribute in this entry which has the given name,\nand return its value. Returns `Ok(None)` if no attribute is found.",20,null],[11,"eq","","",14,null],[11,"ne","","",14,null],[11,"fmt","","",14,null],[11,"clone","","",14,null],[11,"eq","","",21,null],[11,"ne","","",21,null],[11,"fmt","","",21,null],[11,"clone","","",21,null],[11,"name","","Get this attribute&#39;s name.",21,null],[11,"value","","Get this attribute&#39;s value.",21,null],[11,"fmt","","",22,null],[11,"clone","","",22,null],[11,"next","","",22,null],[11,"fmt","","",23,null],[11,"clone","","",23,null],[11,"current","","Get the entry that the cursor is currently pointing to.",23,null],[11,"next_dfs","","Move the cursor to the next DIE in the tree in DFS order.",23,null],[11,"next_sibling","","Move the cursor to the next sibling DIE of the current one.",23,null],[11,"clone","","",24,null],[11,"fmt","","",24,null],[11,"new","","Construct a new `DebugTypes` instance from the data in the `.debug_types`\nsection.",24,null],[11,"units","","Iterate the type-units in this `.debug_types` section.",24,null],[11,"next","","",25,null],[11,"eq","","",26,null],[11,"ne","","",26,null],[11,"clone","","",26,null],[11,"fmt","","",26,null],[11,"unit_length","","Get the length of the debugging info for this type-unit.",26,null],[11,"length_including_self","","Get the length of the debugging info for this type-unit,\nuncluding the byte length of the encoded length itself.",26,null],[11,"version","","Get the DWARF version of the debugging info for this type-unit.",26,null],[11,"debug_abbrev_offset","","The offset into the `.debug_abbrev` section for this type-unit&#39;s\ndebugging information entries.",26,null],[11,"address_size","","The size of addresses (in bytes) in this type-unit.",26,null],[11,"type_signature","","Get the unique type signature for this type unit.",26,null],[11,"type_offset","","Get the offset within this type unit where the type is defined.",26,null],[11,"entries","","Navigate this type unit&#39;s `DebuggingInformationEntry`s.",26,null],[11,"abbreviations","","Parse this type unit&#39;s abbreviations.",26,null],[11,"eq","","",11,null],[11,"ne","","",11,null],[11,"clone","","",11,null],[11,"fmt","","",11,null],[11,"clone","","",27,null],[11,"fmt","","",27,null],[11,"new","","Construct a new `DebugAbbrev` instance from the data in the `.debug_abbrev`\nsection.",27,null],[11,"abbreviations","","Parse the abbreviations at the given `offset` within this\n`.debug_abbrev` section.",27,null],[11,"clone","","",28,null],[11,"default","","",28,{"inputs":[],"output":{"name":"abbreviations"}}],[11,"fmt","","",28,null],[11,"get","","Get the abbreviation associated with the given code.",28,null],[11,"eq","","",29,null],[11,"ne","","",29,null],[11,"clone","","",29,null],[11,"fmt","","",29,null],[11,"new","","Construct a new `Abbreviation`.",29,{"inputs":[{"name":"u64"},{"name":"dwtag"},{"name":"dwchildren"},{"name":"vec"}],"output":{"name":"abbreviation"}}],[11,"code","","Get this abbreviation&#39;s code.",29,null],[11,"tag","","Get this abbreviation&#39;s tag.",29,null],[11,"has_children","","Return true if this abbreviation&#39;s type has children, false otherwise.",29,null],[11,"attributes","","Get this abbreviation&#39;s attributes.",29,null],[11,"eq","","",30,null],[11,"ne","","",30,null],[11,"clone","","",30,null],[11,"fmt","","",30,null],[11,"new","","Construct a new `AttributeSpecification` from the given name and form.",30,{"inputs":[{"name":"dwat"},{"name":"dwform"}],"output":{"name":"attributespecification"}}],[11,"name","","Get the attribute&#39;s name.",30,null],[11,"form","","Get the attribute&#39;s form.",30,null],[11,"size","","Return the size of the attribute, in bytes.",30,null],[11,"parse_form","","Parse an attribute&#39;s form.",30,null],[6,"ParseResult","","The result of a parse.",null,null],[17,"DW_CHILDREN_no","","",null,null],[17,"DW_CHILDREN_yes","","",null,null],[17,"DW_TAG_null","","",null,null],[17,"DW_TAG_array_type","","",null,null],[17,"DW_TAG_class_type","","",null,null],[17,"DW_TAG_entry_point","","",null,null],[17,"DW_TAG_enumeration_type","","",null,null],[17,"DW_TAG_formal_parameter","","",null,null],[17,"DW_TAG_imported_declaration","","",null,null],[17,"DW_TAG_label","","",null,null],[17,"DW_TAG_lexical_block","","",null,null],[17,"DW_TAG_member","","",null,null],[17,"DW_TAG_pointer_type","","",null,null],[17,"DW_TAG_reference_type","","",null,null],[17,"DW_TAG_compile_unit","","",null,null],[17,"DW_TAG_string_type","","",null,null],[17,"DW_TAG_structure_type","","",null,null],[17,"DW_TAG_subroutine_type","","",null,null],[17,"DW_TAG_typedef","","",null,null],[17,"DW_TAG_union_type","","",null,null],[17,"DW_TAG_unspecified_parameters","","",null,null],[17,"DW_TAG_variant","","",null,null],[17,"DW_TAG_common_block","","",null,null],[17,"DW_TAG_common_inclusion","","",null,null],[17,"DW_TAG_inheritance","","",null,null],[17,"DW_TAG_inlined_subroutine","","",null,null],[17,"DW_TAG_module","","",null,null],[17,"DW_TAG_ptr_to_member_type","","",null,null],[17,"DW_TAG_set_type","","",null,null],[17,"DW_TAG_subrange_type","","",null,null],[17,"DW_TAG_with_stmt","","",null,null],[17,"DW_TAG_access_declaration","","",null,null],[17,"DW_TAG_base_type","","",null,null],[17,"DW_TAG_catch_block","","",null,null],[17,"DW_TAG_const_type","","",null,null],[17,"DW_TAG_constant","","",null,null],[17,"DW_TAG_enumerator","","",null,null],[17,"DW_TAG_file_type","","",null,null],[17,"DW_TAG_friend","","",null,null],[17,"DW_TAG_namelist","","",null,null],[17,"DW_TAG_namelist_item","","",null,null],[17,"DW_TAG_packed_type","","",null,null],[17,"DW_TAG_subprogram","","",null,null],[17,"DW_TAG_template_type_parameter","","",null,null],[17,"DW_TAG_template_value_parameter","","",null,null],[17,"DW_TAG_thrown_type","","",null,null],[17,"DW_TAG_try_block","","",null,null],[17,"DW_TAG_variant_part","","",null,null],[17,"DW_TAG_variable","","",null,null],[17,"DW_TAG_volatile_type","","",null,null],[17,"DW_TAG_dwarf_procedure","","",null,null],[17,"DW_TAG_restrict_type","","",null,null],[17,"DW_TAG_interface_type","","",null,null],[17,"DW_TAG_namespace","","",null,null],[17,"DW_TAG_imported_module","","",null,null],[17,"DW_TAG_unspecified_type","","",null,null],[17,"DW_TAG_partial_unit","","",null,null],[17,"DW_TAG_imported_unit","","",null,null],[17,"DW_TAG_condition","","",null,null],[17,"DW_TAG_shared_type","","",null,null],[17,"DW_TAG_type_unit","","",null,null],[17,"DW_TAG_rvalue_reference_type","","",null,null],[17,"DW_TAG_template_alias","","",null,null],[17,"DW_TAG_lo_user","","",null,null],[17,"DW_TAG_hi_user","","",null,null],[17,"DW_AT_null","","",null,null],[17,"DW_AT_sibling","","",null,null],[17,"DW_AT_location","","",null,null],[17,"DW_AT_name","","",null,null],[17,"DW_AT_ordering","","",null,null],[17,"DW_AT_byte_size","","",null,null],[17,"DW_AT_bit_offset","","",null,null],[17,"DW_AT_bit_size","","",null,null],[17,"DW_AT_stmt_list","","",null,null],[17,"DW_AT_low_pc","","",null,null],[17,"DW_AT_high_pc","","",null,null],[17,"DW_AT_language","","",null,null],[17,"DW_AT_discr","","",null,null],[17,"DW_AT_discr_value","","",null,null],[17,"DW_AT_visibility","","",null,null],[17,"DW_AT_import","","",null,null],[17,"DW_AT_string_length","","",null,null],[17,"DW_AT_common_reference","","",null,null],[17,"DW_AT_comp_dir","","",null,null],[17,"DW_AT_const_value","","",null,null],[17,"DW_AT_containing_type","","",null,null],[17,"DW_AT_default_value","","",null,null],[17,"DW_AT_inline","","",null,null],[17,"DW_AT_is_optional","","",null,null],[17,"DW_AT_lower_bound","","",null,null],[17,"DW_AT_producer","","",null,null],[17,"DW_AT_prototyped","","",null,null],[17,"DW_AT_return_addr","","",null,null],[17,"DW_AT_start_scope","","",null,null],[17,"DW_AT_bit_stride","","",null,null],[17,"DW_AT_upper_bound","","",null,null],[17,"DW_AT_abstract_origin","","",null,null],[17,"DW_AT_accessibility","","",null,null],[17,"DW_AT_address_class","","",null,null],[17,"DW_AT_artificial","","",null,null],[17,"DW_AT_base_types","","",null,null],[17,"DW_AT_calling_convention","","",null,null],[17,"DW_AT_count","","",null,null],[17,"DW_AT_data_member_location","","",null,null],[17,"DW_AT_decl_column","","",null,null],[17,"DW_AT_decl_file","","",null,null],[17,"DW_AT_decl_line","","",null,null],[17,"DW_AT_declaration","","",null,null],[17,"DW_AT_discr_list","","",null,null],[17,"DW_AT_encoding","","",null,null],[17,"DW_AT_external","","",null,null],[17,"DW_AT_frame_base","","",null,null],[17,"DW_AT_friend","","",null,null],[17,"DW_AT_identifier_case","","",null,null],[17,"DW_AT_macro_info","","",null,null],[17,"DW_AT_namelist_item","","",null,null],[17,"DW_AT_priority","","",null,null],[17,"DW_AT_segment","","",null,null],[17,"DW_AT_specification","","",null,null],[17,"DW_AT_static_link","","",null,null],[17,"DW_AT_type","","",null,null],[17,"DW_AT_use_location","","",null,null],[17,"DW_AT_variable_parameter","","",null,null],[17,"DW_AT_virtuality","","",null,null],[17,"DW_AT_vtable_elem_location","","",null,null],[17,"DW_AT_allocated","","",null,null],[17,"DW_AT_associated","","",null,null],[17,"DW_AT_data_location","","",null,null],[17,"DW_AT_byte_stride","","",null,null],[17,"DW_AT_entry_pc","","",null,null],[17,"DW_AT_use_UTF8","","",null,null],[17,"DW_AT_extension","","",null,null],[17,"DW_AT_ranges","","",null,null],[17,"DW_AT_trampoline","","",null,null],[17,"DW_AT_call_column","","",null,null],[17,"DW_AT_call_file","","",null,null],[17,"DW_AT_call_line","","",null,null],[17,"DW_AT_description","","",null,null],[17,"DW_AT_binary_scale","","",null,null],[17,"DW_AT_decimal_scale","","",null,null],[17,"DW_AT_small","","",null,null],[17,"DW_AT_decimal_sign","","",null,null],[17,"DW_AT_digit_count","","",null,null],[17,"DW_AT_picture_string","","",null,null],[17,"DW_AT_mutable","","",null,null],[17,"DW_AT_threads_scaled","","",null,null],[17,"DW_AT_explicit","","",null,null],[17,"DW_AT_object_pointer","","",null,null],[17,"DW_AT_endianity","","",null,null],[17,"DW_AT_elemental","","",null,null],[17,"DW_AT_pure","","",null,null],[17,"DW_AT_recursive","","",null,null],[17,"DW_AT_signature","","",null,null],[17,"DW_AT_main_subprogram","","",null,null],[17,"DW_AT_data_bit_offset","","",null,null],[17,"DW_AT_const_expr","","",null,null],[17,"DW_AT_enum_class","","",null,null],[17,"DW_AT_linkage_name","","",null,null],[17,"DW_AT_lo_user","","",null,null],[17,"DW_AT_hi_user","","",null,null],[17,"DW_FORM_null","","",null,null],[17,"DW_FORM_addr","","",null,null],[17,"DW_FORM_block2","","",null,null],[17,"DW_FORM_block4","","",null,null],[17,"DW_FORM_data2","","",null,null],[17,"DW_FORM_data4","","",null,null],[17,"DW_FORM_data8","","",null,null],[17,"DW_FORM_string","","",null,null],[17,"DW_FORM_block","","",null,null],[17,"DW_FORM_block1","","",null,null],[17,"DW_FORM_data1","","",null,null],[17,"DW_FORM_flag","","",null,null],[17,"DW_FORM_sdata","","",null,null],[17,"DW_FORM_strp","","",null,null],[17,"DW_FORM_udata","","",null,null],[17,"DW_FORM_ref_addr","","",null,null],[17,"DW_FORM_ref1","","",null,null],[17,"DW_FORM_ref2","","",null,null],[17,"DW_FORM_ref4","","",null,null],[17,"DW_FORM_ref8","","",null,null],[17,"DW_FORM_ref_udata","","",null,null],[17,"DW_FORM_indirect","","",null,null],[17,"DW_FORM_sec_offset","","",null,null],[17,"DW_FORM_exprloc","","",null,null],[17,"DW_FORM_flag_present","","",null,null],[17,"DW_FORM_ref_sig8","","",null,null],[8,"Endianity","","A trait describing the endianity of some buffer.",null,null]],"paths":[[3,"DwChildren"],[3,"DwTag"],[3,"DwAt"],[3,"DwForm"],[3,"DebugStrOffset"],[3,"DebugLineOffset"],[3,"DebugLocOffset"],[3,"DebugMacinfoOffset"],[3,"UnitOffset"],[3,"DebugInfoOffset"],[3,"DebugTypesOffset"],[3,"DebugAbbrevOffset"],[4,"Error"],[4,"Format"],[4,"AttributeValue"],[4,"LittleEndian"],[4,"BigEndian"],[3,"DebugInfo"],[3,"UnitHeadersIter"],[3,"UnitHeader"],[3,"DebuggingInformationEntry"],[3,"Attribute"],[3,"AttrsIter"],[3,"EntriesCursor"],[3,"DebugTypes"],[3,"TypeUnitHeadersIter"],[3,"TypeUnitHeader"],[3,"DebugAbbrev"],[3,"Abbreviations"],[3,"Abbreviation"],[3,"AttributeSpecification"]]};
searchIndex["byteorder"] = {"doc":"This crate provides convenience methods for encoding and decoding numbers\nin either big-endian or little-endian order.","items":[[4,"BigEndian","byteorder","Defines big-endian serialization.",null,null],[4,"LittleEndian","","Defines little-endian serialization.",null,null],[6,"NetworkEndian","","Defines network byte order serialization.",null,null],[6,"NativeEndian","","Defines system native-endian serialization.",null,null],[8,"ReadBytesExt","","Extends `Read` with methods for reading numbers. (For `std::io`.)",null,null],[11,"read_u8","","Reads an unsigned 8 bit integer from the underlying reader.",0,null],[11,"read_i8","","Reads a signed 8 bit integer from the underlying reader.",0,null],[11,"read_u16","","Reads an unsigned 16 bit integer from the underlying reader.",0,null],[11,"read_i16","","Reads a signed 16 bit integer from the underlying reader.",0,null],[11,"read_u32","","Reads an unsigned 32 bit integer from the underlying reader.",0,null],[11,"read_i32","","Reads a signed 32 bit integer from the underlying reader.",0,null],[11,"read_u64","","Reads an unsigned 64 bit integer from the underlying reader.",0,null],[11,"read_i64","","Reads a signed 64 bit integer from the underlying reader.",0,null],[11,"read_uint","","Reads an unsigned n-bytes integer from the underlying reader.",0,null],[11,"read_int","","Reads a signed n-bytes integer from the underlying reader.",0,null],[11,"read_f32","","Reads a IEEE754 single-precision (4 bytes) floating point number from\nthe underlying reader.",0,null],[11,"read_f64","","Reads a IEEE754 double-precision (8 bytes) floating point number from\nthe underlying reader.",0,null],[8,"WriteBytesExt","","Extends `Write` with methods for writing numbers. (For `std::io`.)",null,null],[11,"write_u8","","Writes an unsigned 8 bit integer to the underlying writer.",1,null],[11,"write_i8","","Writes a signed 8 bit integer to the underlying writer.",1,null],[11,"write_u16","","Writes an unsigned 16 bit integer to the underlying writer.",1,null],[11,"write_i16","","Writes a signed 16 bit integer to the underlying writer.",1,null],[11,"write_u32","","Writes an unsigned 32 bit integer to the underlying writer.",1,null],[11,"write_i32","","Writes a signed 32 bit integer to the underlying writer.",1,null],[11,"write_u64","","Writes an unsigned 64 bit integer to the underlying writer.",1,null],[11,"write_i64","","Writes a signed 64 bit integer to the underlying writer.",1,null],[11,"write_uint","","Writes an unsigned n-bytes integer to the underlying writer.",1,null],[11,"write_int","","Writes a signed n-bytes integer to the underlying writer.",1,null],[11,"write_f32","","Writes a IEEE754 single-precision (4 bytes) floating point number to\nthe underlying writer.",1,null],[11,"write_f64","","Writes a IEEE754 double-precision (8 bytes) floating point number to\nthe underlying writer.",1,null],[8,"ByteOrder","","ByteOrder describes types that can serialize integers as bytes.",null,null],[10,"read_u16","","Reads an unsigned 16 bit integer from `buf`.",2,null],[10,"read_u32","","Reads an unsigned 32 bit integer from `buf`.",2,null],[10,"read_u64","","Reads an unsigned 64 bit integer from `buf`.",2,null],[10,"read_uint","","Reads an unsigned n-bytes integer from `buf`.",2,null],[10,"write_u16","","Writes an unsigned 16 bit integer `n` to `buf`.",2,null],[10,"write_u32","","Writes an unsigned 32 bit integer `n` to `buf`.",2,null],[10,"write_u64","","Writes an unsigned 64 bit integer `n` to `buf`.",2,null],[10,"write_uint","","Writes an unsigned integer `n` to `buf` using only `nbytes`.",2,null],[11,"read_i16","","Reads a signed 16 bit integer from `buf`.",2,null],[11,"read_i32","","Reads a signed 32 bit integer from `buf`.",2,null],[11,"read_i64","","Reads a signed 64 bit integer from `buf`.",2,null],[11,"read_int","","Reads a signed n-bytes integer from `buf`.",2,null],[11,"read_f32","","Reads a IEEE754 single-precision (4 bytes) floating point number.",2,null],[11,"read_f64","","Reads a IEEE754 double-precision (8 bytes) floating point number.",2,null],[11,"write_i16","","Writes a signed 16 bit integer `n` to `buf`.",2,null],[11,"write_i32","","Writes a signed 32 bit integer `n` to `buf`.",2,null],[11,"write_i64","","Writes a signed 64 bit integer `n` to `buf`.",2,null],[11,"write_int","","Writes a signed integer `n` to `buf` using only `nbytes`.",2,null],[11,"write_f32","","Writes a IEEE754 single-precision (4 bytes) floating point number.",2,null],[11,"write_f64","","Writes a IEEE754 double-precision (8 bytes) floating point number.",2,null],[11,"read_u16","","",3,null],[11,"read_u32","","",3,null],[11,"read_u64","","",3,null],[11,"read_uint","","",3,null],[11,"write_u16","","",3,null],[11,"write_u32","","",3,null],[11,"write_u64","","",3,null],[11,"write_uint","","",3,null],[11,"read_u16","","",4,null],[11,"read_u32","","",4,null],[11,"read_u64","","",4,null],[11,"read_uint","","",4,null],[11,"write_u16","","",4,null],[11,"write_u32","","",4,null],[11,"write_u64","","",4,null],[11,"write_uint","","",4,null],[11,"read_u8","","Reads an unsigned 8 bit integer from the underlying reader.",0,null],[11,"read_i8","","Reads a signed 8 bit integer from the underlying reader.",0,null],[11,"read_u16","","Reads an unsigned 16 bit integer from the underlying reader.",0,null],[11,"read_i16","","Reads a signed 16 bit integer from the underlying reader.",0,null],[11,"read_u32","","Reads an unsigned 32 bit integer from the underlying reader.",0,null],[11,"read_i32","","Reads a signed 32 bit integer from the underlying reader.",0,null],[11,"read_u64","","Reads an unsigned 64 bit integer from the underlying reader.",0,null],[11,"read_i64","","Reads a signed 64 bit integer from the underlying reader.",0,null],[11,"read_uint","","Reads an unsigned n-bytes integer from the underlying reader.",0,null],[11,"read_int","","Reads a signed n-bytes integer from the underlying reader.",0,null],[11,"read_f32","","Reads a IEEE754 single-precision (4 bytes) floating point number from\nthe underlying reader.",0,null],[11,"read_f64","","Reads a IEEE754 double-precision (8 bytes) floating point number from\nthe underlying reader.",0,null],[11,"write_u8","","Writes an unsigned 8 bit integer to the underlying writer.",1,null],[11,"write_i8","","Writes a signed 8 bit integer to the underlying writer.",1,null],[11,"write_u16","","Writes an unsigned 16 bit integer to the underlying writer.",1,null],[11,"write_i16","","Writes a signed 16 bit integer to the underlying writer.",1,null],[11,"write_u32","","Writes an unsigned 32 bit integer to the underlying writer.",1,null],[11,"write_i32","","Writes a signed 32 bit integer to the underlying writer.",1,null],[11,"write_u64","","Writes an unsigned 64 bit integer to the underlying writer.",1,null],[11,"write_i64","","Writes a signed 64 bit integer to the underlying writer.",1,null],[11,"write_uint","","Writes an unsigned n-bytes integer to the underlying writer.",1,null],[11,"write_int","","Writes a signed n-bytes integer to the underlying writer.",1,null],[11,"write_f32","","Writes a IEEE754 single-precision (4 bytes) floating point number to\nthe underlying writer.",1,null],[11,"write_f64","","Writes a IEEE754 double-precision (8 bytes) floating point number to\nthe underlying writer.",1,null]],"paths":[[8,"ReadBytesExt"],[8,"WriteBytesExt"],[8,"ByteOrder"],[4,"BigEndian"],[4,"LittleEndian"]]};
searchIndex["leb128"] = {"doc":"Read and write DWARF&#39;s &quot;Little Endian Base 128&quot; (LEB128) variable length\ninteger encoding.","items":[[0,"read","leb128","A module for reading signed and unsigned integers that have been LEB128\nencoded.",null,null],[4,"Error","leb128::read","An enumeration of the possible errors that can occur when reading a\nnumber encoded with LEB128.",null,null],[13,"IoError","","There was an underlying IO error.",0,null],[13,"Overflow","","The number being read is larger than can be represented.",0,null],[5,"unsigned","","Read an unsigned LEB128 number from the given `std::io::Read`able and\nreturn it or an error if reading failed.",null,{"inputs":[{"name":"r"}],"output":{"name":"result"}}],[5,"signed","","Read a signed LEB128 number from the given `std::io::Read`able and\nreturn it or an error if reading failed.",null,{"inputs":[{"name":"r"}],"output":{"name":"result"}}],[11,"fmt","","",0,null],[11,"from","","",0,{"inputs":[{"name":"error"}],"output":{"name":"self"}}],[11,"fmt","","",0,null],[11,"description","","",0,null],[11,"cause","","",0,null],[0,"write","leb128","A module for writing integers encoded as LEB128.",null,null],[5,"unsigned","leb128::write","Write the given unsigned number using the LEB128 encoding to the given\n`std::io::Write`able. Returns the number of bytes written to `w`, or an\nerror if writing failed.",null,{"inputs":[{"name":"w"},{"name":"u64"}],"output":{"name":"result"}}],[5,"signed","","Write the given signed number using the LEB128 encoding to the given\n`std::io::Write`able. Returns the number of bytes written to `w`, or an\nerror if writing failed.",null,{"inputs":[{"name":"w"},{"name":"i64"}],"output":{"name":"result"}}]],"paths":[[4,"Error"]]};
initSearch(searchIndex);