import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { AiOutlineDelete } from 'react-icons/ai'
import { BsFillBookFill,  BsFillBookmarkCheckFill,  BsFillPencilFill } from 'react-icons/bs'

const index = () => {

    const [cursos, setCursos] = useState([])

    useEffect(() => {
        setCursos(getAll())
      }, [])
    
      function getAll() {
        return JSON.parse(window.localStorage.getItem('cursos')) || []
      }
    
      function excluir(id) {
        if (confirm('Deseja realmente excluir este item?')) {
          const cursos = getAll()
          cursos.splice(id, 1)
          window.localStorage.setItem('cursos', JSON.stringify(cursos))
          setCursos(cursos)
        }
      }
      
    return (
        <>
            <Pagina titulo="Cursos">
                <Link href={'/cursos/form/'} className="btn btn-dark mb-2" >Novo</Link>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th> <BsFillBookmarkCheckFill /> </th>
                            <th>Curso</th> 
                            <th>Universidade</th> 
                            <th>Duração</th>
                            <th>Modalidade</th>
                        </tr>
                    </thead>
                    <tbody>

                        {cursos.map((item, i) => (

                            <tr key={i}>
                                <td>
                                    <Link href={'/cursos/' + i} >
                                        <BsFillPencilFill className='me-2 text-dark' />
                                    </Link>
                                    
                                    <AiOutlineDelete onClick={() => excluir(i)} className='text-danger' />
                                </td>
                                <td>{item.curso}</td>
                                <td>{item.universidade}</td>
                                <td>{item.duracao}</td>
                                <td>{item.modalidade}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Pagina>
        </>

    )
}

export default index