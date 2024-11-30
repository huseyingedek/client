import React, { useState } from 'react'
import { Modal, Form, Table, Input, Button, message } from 'antd'
import Swal from 'sweetalert2';

const Edit = ({ isEditModalOpen, setIsEditModalOpen, categories, setCategories }) => {
    const [editingRow, setEditingRow] = useState({});

    const onFinish = (values) => {
        try {
            fetch("http://localhost:5000/api/categories/update-category", {
                method: "PUT",
                body: JSON.stringify({ ...values, categoryId: editingRow._id }),
                headers: { "Content-type": "application/json; charset=UTF-8" },
            }
            )
            message.success("Kategori başarıyla güncellendi")
            setCategories(categories.map((item) => {
                if (item._id === editingRow._id) {
                    return { ...item, title: values.title };
                }
                return item;
            }));
        } catch (error) {
            message.error("Bir şeyler ters gitti");
            console.log(error)
        }
    }

    const deleteCategory = (id) => {
        try {
            Swal.fire({
                title: "Uyarı",
                text: "Silmek istediğinize emin misiniz?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Evet",
                cancelButtonText: "Hayır",
            }).then((result) => {
                if (result.isConfirmed) {
                    fetch("http://localhost:5000/api/categories/delete-category", {
                        method: "DELETE",
                        body: JSON.stringify({ categoryId: id }),
                        headers: { "Content-Type": "application/json; charset=UTF-8" },
                    })
                    .then((response) => {
                            if (response.ok) {
                                message.success("Katgori Silindi")
                                setCategories(categories.filter((item) => item._id !== id));
                            }
                        })
                }
            });
        } catch (error) {
            console.log(error);
        }
    };

    const columns = [
        {
            title: "Category Title",
            dataIndex: "title",
            render: (_, record) => {
                if (record._id === editingRow._id) {
                    return (
                        <Form.Item className='mb-0' name={"title"}>
                            <Input defaultValue={record.title} />
                        </Form.Item>
                    );
                } else {
                    return <p>{record.title}</p>
                }
            }
        },
        {
            title: "Action",
            dataIndex: "action",
            render: (text, record) => {
                return (
                    <div>
                        <Button type='link' className='pl-0' onClick={() => setEditingRow(record)}>Düzenle</Button>
                        <Button type='text' htmlType='submit' className='text-gray-500'>Kaydet</Button>
                        <Button type='text' danger onClick={() => deleteCategory(record._id)}>Sil</Button>
                    </div>
                );
            }
        }
    ]

    return (
        <Modal open={isEditModalOpen} title="Kategori İşlemleri" onCancel={() => setIsEditModalOpen(false)} footer={false}>
            <Form onFinish={onFinish}>
                <Table bordered dataSource={categories} columns={columns} rowKey={"_id"} />
            </Form>
        </Modal>
    )
}

export default Edit;